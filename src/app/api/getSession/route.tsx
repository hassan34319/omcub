export const dynamic = 'force-dynamic'

import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe: Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const generateRandomString = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const orderData = (customer, product, currency: string) => {
  const images = JSON.parse(product?.images);
  const productUIDs = JSON.parse(product?.productUID);
  const quantities = JSON.parse(product?.quantities);
  
  const products = [];
  for (let i = 0; i < images.length; i++) {
    const obj = {
      itemReferenceId: generateRandomString(10),
      productUid: productUIDs[i],
      files: [
        {
          type: "default",
          url: images[i],
        },
      ],
      quantity: quantities[i],
    };
    products.push(obj);
  }

  const shippingDetails = {
    companyName: "Test Name",
    addressLine1: customer?.address?.line1,
    addressLine2: customer?.address?.line2,
    state: customer?.address?.state,
    city: customer?.address?.city,
    postCode: customer?.address?.postal_code,
    country: customer?.address?.country,
    email: customer?.email,
    phone: "",
  };

  const data = {
    orderType: "draft", // change to 'order' for production
    orderReferenceId: generateRandomString(10),
    customerReferenceId: customer?.email, //change to auth unique id later
    currency,
    items: products,
    shipmentMethodUid: "express",
    shippingAddress: {
      ...shippingDetails,
      firstName: customer?.name?.split(" ")[0] || customer?.name,
      lastName: customer?.name?.split(" ")[1] || "",
    },
    returnAddress: shippingDetails,
  };

  return data;
};

export async function GET(req: Request) {
  try {
    const sessionId = req?.url?.split("=")[1] as string;

    if (!sessionId) {


    const session = await stripe.checkout.sessions.listLineItems(sessionId);
    const sessionDetails = await stripe.checkout.sessions.retrieve(sessionId);
    console.log("🚀 ~ file: route.tsx:77 ~ GET ~ session:", session)
    console.log("🚀 ~ file: route.tsx:78 ~ GET ~ sessionDetails:", sessionDetails)

    const data = orderData(
      sessionDetails?.customer_details,
      sessionDetails?.metadata,
      sessionDetails?.currency?.toUpperCase()
    );
    const order = await fetch("https://order.gelatoapis.com/v4/orders", {
      method: "POST",
      headers: {
        "X-API-KEY": process.env.NEXT_PUBLIC_GELATO_API_KEY,
      },
      body: JSON.stringify(data),
    });
    const orderDetails = await order.json();
    console.log("🚀 ~ file: route.tsx:79 ~ GET ~ order:", orderDetails);

    return NextResponse.json({ session, sessionDetails });
  } else {
    return NextResponse.json({ message: "No session id" });
  }
  
  } catch (err) {
    console.log(err);
  }
}
