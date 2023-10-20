import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import SuccessDisclosure from "./(SuccessDiscolusure)/Disclosure";

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
export const dynamic = 'force-dynamic'

async function success({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const getStripeProducts = async (sessionId: string) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/getSession?session_id=${sessionId}`
    const res = await fetch(url);

    if (!res.ok) return;
    
    const data = await res.json();
    const products = data.session.data;
    const productDetails = data.sessionDetails.metadata;

    return products;
  };

  const session_id = (searchParams?.session_id as string) || "none";
  const products = await getStripeProducts(session_id!);

  const totalAmount = products?.reduce(
    (acc: number, product: StripeProduct) =>
      acc + product!?.amount_total/ 100,
    0
  );

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <main className="mx-auto flex min-h-screen justify-center overflow-hidden">
      {/* <Head>
        <title>Thankyou</title>
        <meta
          name="description"
          content={`Welcome to our ecommerce store, where we are passionate about
          providing the latest and greatest gadgets to our customers. Our team
          is made up of technology enthusiasts who love to stay up to date
          with the latest advancements in the industry.`}
        ></meta>
        <link rel="icon" href="/my_logo.png" />
      </Head> */}

      <SuccessDisclosure products={products} session_id={session_id} />

      {products?.length > 0 && (
        <div className="hidden w-1/2 md:flex md:flex-col">
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {products?.length > 0 ? "Order Summary" : "Your bag is empty."}
          </h1>
          <p className="my-4">Free delivery and free returns.</p>
          <div className="mx-5 md:mx-8">
            {products?.map((product: StripeProduct) => (
              <div
                key={product.id}
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
                      <h4 className="font-semibold ">{product?.description}</h4>
                      <p className="flex items-end gap-x-1 font-semibold">
                        {product?.quantity}
                      </p>
                    </div>
                    <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                      Show product details
                      <ChevronDownIcon className="h-6 w-6" />
                    </p>
                  </div>
                  <div className="flex flex-col items-end space-y-4">
                    <h4 className="text-xl font-semibold ">
                      {USDollar.format(product.price!.unit_amount / 100)}
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
        </div>
      )}
    </main>
  );
}

export default success;