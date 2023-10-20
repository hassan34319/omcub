"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Button from "../../checkout/(checkoutComponents)/Button";
import { useDispatch } from "react-redux";
import { resetCart } from "../../../redux/reducers/cartSlice";

interface StripeProduct {
  id: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  object: string;
  quantity: number | null;
  price: {
    unit_amount: number;
  } | null;
}

type Props = {
  products: StripeProduct[];
  session_id: string;
};
function SuccessDisclosure({ products, session_id }: Props) {

  const dispatch = useDispatch();
  const router = useRouter();

  
  const placeOrder = () => {
    dispatch(resetCart());
    router.push("/");
  };

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const totalAmount = products?.reduce(
    (acc, product) => acc + product.price!.unit_amount / 100,
    0
  );

  return (
    <div className="mx-5 mb-6 max-w-full flex-col px-6 md:w-1/2 md:border-r-2 md:border-black">
      <div className="mt-10 mb-0 flex w-screen items-center">
        <CheckCircleIcon className="h-20 w-20" />
        <div className="flex-col">
          <p className="mb-0 block text-sm">Order #{session_id?.slice(-5)}</p>
          <h1 className="mt-0 flex flex-col justify-start text-xl font-semibold tracking-wide md:justify-start">
            {/* Tracking-wide gives spacing between letters */}
            {/* <span className="drop-shadow-xl">Thank you {session?.user?.name || "Guest"} </span> */}
          </h1>
        </div>
      </div>
      <div className=" mt-3 w-full flex-col rounded-xl border-4 bg-white p-6 py-4 text-start text-black">
        <div className="flex-col border-b-2 ">
          <h1 className="tracking mb-1 mt-0 flex w-full flex-col justify-start text-lg font-semibold md:justify-start">
            {/* Tracking-wide gives spacing between letters */}
            <span className="drop-shadow-xl">Your order is confirmed</span>
          </h1>
          <p className="mb-2 block text-sm">
            We've accepted your order, and we're getting it ready. Come back to
            this page for updates on your shipment status
          </p>
        </div>
        <div className="mt-2 flex-col border-b-2 text-sm">
          <p className="mb-1 block">Other tracking number:</p>
          <p className="mb-2 block text-gray-600">{session_id?.slice(-20)}</p>
        </div>
        <div className="mt-2 flex-col md:hidden ">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Order Summary</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <div className="mx-5 md:mx-8">
                    {products?.map((product) => (
                      <div
                        key={product?.id}
                        className="flex flex-col gap-x-4 border-b border-black pb-5 lg:flex-row lg:items-center"
                      >
                        {/* <div className="relative h-44 w-44">
                            <Image
                              src={urlFor(items[0].image[0]).url()}
                              alt={product.description}
                              layout="fill"
                              objectFit="contain"
                            />
                          </div> */}

                        <div className="flex flex-1 items-end ">
                          <div className="flex-1 space-y-4">
                            <div className="flex flex-col gap-x-8 text-xl ">
                              <h4 className="font-semibold ">
                                {product?.description}
                              </h4>
                              <p className="flex items-end gap-x-1 font-semibold">
                                Quantity: {product?.quantity}
                              </p>
                            </div>
                            <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                              Show product details
                              <ChevronDownIcon className="h-6 w-6" />
                            </p>
                          </div>
                          <div className="flex flex-col items-end space-y-4">
                            <h4 className="text-xl font-semibold ">
                              {USDollar.format(
                                product.price!.unit_amount / 100
                              )}
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="my-12 mt-6 ml-auto ">
                      <div className="divide-y divide-black">
                        <div className="pb-4">
                          <div className="flex justify-between">
                            <p>Subtotal</p>
                            <p>{USDollar.format(totalAmount) || 0}</p>
                          </div>
                          <div className="flex justify-between">
                            <p>Shipping</p>
                            <p>FREE</p>
                          </div>
                          <div className="flex justify-between">
                            <div className="flex flex-col gap-x-1">
                              Estimated tax for:{" "}
                              <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                                Enter zip code
                                <ChevronDownIcon className="h-6 w-6" />
                              </p>
                            </div>
                            <p>$ -</p>
                          </div>
                        </div>

                        <div className="flex justify-between pt-4 text-xl font-semibold">
                          <h4>Total</h4>
                          <h4>{USDollar.format(totalAmount)}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      <div className=" mb-6 mt-6 w-full flex-col rounded-xl border-4 bg-white p-6 py-4 text-start text-black">
        <div className="flex-col border-b-2">
          <h1 className="tracking mb-1 mt-0 flex w-full flex-col justify-start text-lg font-semibold md:justify-start">
            {/* Tracking-wide gives spacing between letters */}
            <span className="drop-shadow-xl">Order Updates</span>
          </h1>
          <p className="mb-2 block text-sm">
            You will get order updates on this page or through text and email.
            Please check your spam folder if you do not recieve an email from
            our side within 24 hours
          </p>
        </div>
      </div>
      <Button
        //   loading={loading}
        title="Continue Shopping"
        width="w-full"
        onClick={placeOrder}
      />
    </div>
  );
}

export default SuccessDisclosure;
