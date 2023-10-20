import Head from "next/head";
import Link from "next/link";
import Carousel from "../components/CarouselMulti";
import InstagramSlider from "../components/InstagramSlider";
import { sanityClient } from "../lib/sanity-client";
import { InstagramFooterSlider } from "../types/instagram-footer";
import { OmcubSyncProductWithSanityData } from "../../services/printful/allSyncProductTypes";
import { HeroSectionHome } from "../components/HeroSectionHome";
import { getCategoryProducts } from "../../services/sanity/fetchGelatoProducts";


type IndexPageProps = {
  products: OmcubSyncProductWithSanityData;
  men: OmcubSyncProductWithSanityData;
  women: OmcubSyncProductWithSanityData;
};

const fetchData = async () => {
  const [bestSellers, men, women] = await Promise.all([
    getCategoryProducts(210),
    getCategoryProducts(120),
    getCategoryProducts(140)
  ]);

  return {
      products: bestSellers,
      men: men,
      women: women,
  };
} 

const fetchSliderData = async () => {
  const results: InstagramFooterSlider[] = await sanityClient.fetch(`
    *[_type == "instagramFooterSlider" && !(_id in path("drafts.**"))]{
      _id,
      name,
      sliderImage,
      altText,
      socialLink
    }
  `);
  return results;
};

const IndexPage =  async () => {
  const { products, men, women }: any = await fetchData();
  const sliders: InstagramFooterSlider[] = await fetchSliderData()


  return (
    <>
      <Head>
        <title>Omcub Shop Mens, Shirts, Hoodies, Bags &amp; more</title>
        <meta
          name="description"
          content="Omcub Shop Mens, Shirts, Hoodies, Bags &amp; more"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </Head>

      {/* <div className="hero mb-12"></div> */}
      <HeroSectionHome />
      <div className="new-arrivals py-12 bg-[#f9f9f9]">
        <div className="wrapper">
          <div className="title flex justify-between w-4/5 mx-auto">
            <div className="info relative">
              <h2 className="heading sm:text-[22px] font-serif font-bold">
                Best Sellers
              </h2>
              <div className="count text-[13px]">
                {products?.length} items
              </div>
            </div>
            <div className="button">
              <Link href="/collections/188">
                <button className="font-bold text-xs border border-black  rounded px-5 py-2 hover:bg-black hover:text-white duration-200 hover:ease">
                  SHOP ALL
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel">
            <Carousel col={3} data={products} />
          </div>
        </div>
      </div>
      <div className="new-arrivals py-12 bg-[#f9f9f9]">
        <div className="wrapper">
          <div className="title flex justify-between w-4/5 mx-auto">
            <div className="info relative">
              <h2 className="heading sm:text-[22px] font-serif font-bold">
                Men&apos;s New Arrivals
              </h2>
              <div className="count text-[13px]">{men?.length} items</div>
            </div>
            <div className="button">
              <Link href="/collections/123">
                <button className="font-bold text-xs border border-black  rounded px-5 py-2 hover:bg-black hover:text-white duration-200 hover:ease">
                  SHOP ALL
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel">
            <Carousel col={4} data={men} />
          </div>
        </div>
      </div>
      <div className="new-arrivals py-12 bg-[#f9f9f9]">
        <div className="wrapper">
          <div className="title flex justify-between w-4/5 mx-auto">
            <div className="info relative">
              <h2 className="heading sm:text-[22px] font-serif font-bold">
                Women&apos;s Collection
              </h2>
              <div className="count text-[13px]">
                {women?.length} items
              </div>
            </div>
            <div className="button">
              <Link href="/collections/227">
                <button className="font-bold text-xs border border-black  rounded px-5 py-2 hover:bg-black hover:text-white duration-200 hover:ease">
                  SHOP ALL
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel">
            <Carousel col={3} data={women} />
          </div>
        </div>
      </div>
      <div className="text-center pb-6 md:pb-12">
        {/* <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        All Products
      </h1> */}
      </div>

      <div className="instagram-slider">
        <div className="title text-center py-6">
          <div className="heading ">
            <h1 className="font-semibold font-serif text-2xl">
              I<span className="text-lg">nstagram</span>
            </h1>
          </div>
          <a
            href="https://instagram.com/om_cub"
            target="new"
            className="sub text-xs pt-1 pb-3 w-max mx-auto border-b border-black"
          >
            @om_cub
          </a>
        </div>
        <InstagramSlider col={3} data={sliders} />
      </div>
    </>
  );
};


export default IndexPage;
