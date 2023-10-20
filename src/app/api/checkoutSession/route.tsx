import { NextResponse } from "next/server";
import Stripe from "stripe";
import { itemType } from "../../../redux/reducers/cartSlice";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2023-10-16",
});
interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  email: string;
  codingExperience: string;
  careerPath: string;
  goals: string;
  interviewTime: string[];
}

export async function POST(
    request: Request
) {
    const body = await request.json();
    const items: itemType[] = body?.items;
    const transformedItems = items?.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item?.title,
          // images: [urlFor(item.image[0]).url()],
          images : [item?.printUrl],
        },
        unit_amount: Math.round(item?.price * 100),
      },
      quantity: item.quantity,
    }));

    // Calculate the total amount for the checkout session (you can change this according to your logic)
    const totalAmount = 4000; // $25.00 in cents

    try {
     const params: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ["card"],
        // shipping_address_collection: {
        //   allowed_countries: ["US", "CA", "GB"],
        // },
        line_items: transformedItems,
        shipping_address_collection: {
          allowed_countries: ['US', 'CA', 'GB']
        },
        payment_intent_data: {},
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}checkout`,
        metadata: {
          images: JSON.stringify(items.map((item) => item.printUrl)),
          quantities: JSON.stringify(items.map((item) => item.quantity)),
          // address: body.address,
          productUID: JSON.stringify(items.map((item) => item.uid)),
        },
      };
      const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params);

      return NextResponse.json(checkoutSession);
    } catch (err) {
      console.log(err)
      const errorMessage = err instanceof Error ? err.message : "Internal server error";
      return NextResponse.json({ statusCode: 500, message: errorMessage });
    }
  } 