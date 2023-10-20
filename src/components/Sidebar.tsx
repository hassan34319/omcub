import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ setMenuOpen, setIsLoading }) => {
  const [category, setCategory] = useState(true);

  const onClickMenuItem = () => {
    setMenuOpen(false);
    setIsLoading(true);
  };

  return (
    <div className="side-menu z-[100] fixed h-screen bg-white w-screen block lg:hidden overflow-scroll">
      <div className="title flex justify-between w-5/6 mx-auto py-4 sticky top-0 bg-white">
        <h2 className="font-bold">Omcub</h2>
        <div onClick={() => setMenuOpen(false)}>
          <img src="/images/close.svg" alt="Close menu" />
        </div>
      </div>

      <div className="categories flex mx-8 my-8">
        <div
          className={`men font-serif font-bold mr-4  border-black ${
            category ? "border-b-2" : ""
          }`}
          onClick={() => setCategory(true)}
        >
          Men
        </div>
        <div
          className={`women font-serif font-bold mr-4  border-black ${
            !category ? "border-b-2" : ""
          }`}
          onClick={() => setCategory(false)}
        >
          Women
        </div>
      </div>

      {category ? (
        <div className="menu-items w-5/6 mx-auto my-6">
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/">Featured</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/188">
                <span onClick={onClickMenuItem}>Best sellers</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/123">
                <span onClick={onClickMenuItem}>New arrivals</span>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="#">Tops</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/6">
                <span onClick={onClickMenuItem}>Shirts</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/7">
                <span onClick={onClickMenuItem}>Hoodies & Jackets</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/27">
                <span onClick={onClickMenuItem}>All-over shirts</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/85">
                <span onClick={onClickMenuItem}>Embroidered shirts</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">
                <span onClick={onClickMenuItem}>Sportswear</span>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/107">
                <span onClick={onClickMenuItem}>Bottoms</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">
                <span onClick={onClickMenuItem}>Sports wear</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/58">
                <span onClick={onClickMenuItem}>Shorts</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <span onClick={onClickMenuItem}>Boardshorts</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/240">
                <span onClick={onClickMenuItem}>Pants</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/125">
                <span onClick={onClickMenuItem}>Underwear</span>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/4">
                <span onClick={onClickMenuItem}>Accessories</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/16">
                <span onClick={onClickMenuItem}>Bags</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/205">
                <span onClick={onClickMenuItem}>Footwear</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/15">
                <span onClick={onClickMenuItem}>Hats</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/45">
                <span onClick={onClickMenuItem}>Beanies</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <span onClick={onClickMenuItem}>Gear</span>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/112">
                <span onClick={onClickMenuItem}>Drinkware & coasters</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/191">
                <span onClick={onClickMenuItem}>Water bottles</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/195">
                <span onClick={onClickMenuItem}>Mugs</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/238">
                <span onClick={onClickMenuItem}>Tumblers</span>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/21">
                <span onClick={onClickMenuItem}>Wall Art</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/202">
                <span onClick={onClickMenuItem}>Stickers</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/55">
                <span onClick={onClickMenuItem}>Posters</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/57">
                <span onClick={onClickMenuItem}>Canvas prints</span>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/243">
                <span onClick={onClickMenuItem}>Tech accessories</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/244">
                <span onClick={onClickMenuItem}>Phones cases</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/250">
                <span onClick={onClickMenuItem}>Laptop cases</span>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/">
                <span onClick={onClickMenuItem}>Kids & Youth</span>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/252">
                <span onClick={onClickMenuItem}>Home decor</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/258">
                <span onClick={onClickMenuItem}>Pillow cases</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/255">
                <span onClick={onClickMenuItem}>Blankets</span>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="#">
                <span onClick={onClickMenuItem}>Collections</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/188">
                <span onClick={onClickMenuItem}>Best sellers</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <span onClick={onClickMenuItem}>Pickleball</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/223">
                <span onClick={onClickMenuItem}>Premium products</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/144">
                <span onClick={onClickMenuItem}>Fall & winter</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">
                <span onClick={onClickMenuItem}>Sportswear</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/119">
                <span onClick={onClickMenuItem}>Streetwear</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/120">
                <span onClick={onClickMenuItem}>Beachwear</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/260">
                <span onClick={onClickMenuItem}>Halloween</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/209">
                <span onClick={onClickMenuItem}>Back to school</span>
              </Link>
            </div>
          </div>
          {/* <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/226">
                <span onClick={onClickMenuItem}>Shop All Mens</span>
              </Link>
            </div>
          </div> */}
        </div>
      ) : (
        ""
      )}

      {!category ? (
        <div className="menu-items w-5/6 mx-auto my-6">
          <div className="menu-item my-4">
            {/* <div className="item font-serif font-bold">
              <Link href="/">Featured</Link>
            </div> */}
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/32">
                <span onClick={onClickMenuItem}>T-shirts</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/35">
                <span onClick={onClickMenuItem}>All over t-shirt</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/31">
                <span onClick={onClickMenuItem}>Crop tops</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/33">
                <span onClick={onClickMenuItem}>3/4 sleeve shirts</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/34">
                <span onClick={onClickMenuItem}>long sleeve shirts</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/96">
                <span onClick={onClickMenuItem}>Hoodies & Jackets</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">
                <span onClick={onClickMenuItem}>Sportswear</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/60">
                <span onClick={onClickMenuItem}>Skirts</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/11">
                <span onClick={onClickMenuItem}>Dresses</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/58">
                <span onClick={onClickMenuItem}>Shorts</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/240">
                <span onClick={onClickMenuItem}>Pants</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/100">
                <span onClick={onClickMenuItem}>Swimwear</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/125">
                <span onClick={onClickMenuItem}>Under wear</span>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/4">
                <span onClick={onClickMenuItem}>Accessories</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/16">
                <span onClick={onClickMenuItem}>Bags & beauty</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/205">
                <span onClick={onClickMenuItem}>Footwear</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/15">
                <span onClick={onClickMenuItem}>Hats</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/45">
                <span onClick={onClickMenuItem}>Beanies</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <span onClick={onClickMenuItem}>Gear</span>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/112">
                <span onClick={onClickMenuItem}>Drinkware & coasters</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/191">
                <span onClick={onClickMenuItem}>Water bottles</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/195">
                <span onClick={onClickMenuItem}>Mugs</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/238">
                <span onClick={onClickMenuItem}>Tumblers</span>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/21">
                <span onClick={onClickMenuItem}>Wall Art</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/202">
                <span onClick={onClickMenuItem}>Stickers</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/55">
                <span onClick={onClickMenuItem}>Posters</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/57">
                <span onClick={onClickMenuItem}>Canvas prints</span>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/243">
                <span onClick={onClickMenuItem}>Tech accessories</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/244">
                <span onClick={onClickMenuItem}>Phones cases</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/250">
                <span onClick={onClickMenuItem}>Laptop cases</span>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/">
                <span onClick={onClickMenuItem}>Kids & Youth</span>
              </Link>
            </div>
          </div>

          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/252">
                <span onClick={onClickMenuItem}>Home decor</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/258">
                <span onClick={onClickMenuItem}>Pillow cases</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/255">
                <span onClick={onClickMenuItem}>Blankets</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <span onClick={onClickMenuItem}>Duvet covers</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/45">
                <span onClick={onClickMenuItem}>Bean bags</span>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="#">
                <span onClick={onClickMenuItem}>Collections</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/188">
                <span onClick={onClickMenuItem}>Best sellers</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <span onClick={onClickMenuItem}>Pickleball</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/223">
                <span onClick={onClickMenuItem}>Premium products</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/144">
                <span onClick={onClickMenuItem}>Fall & winter</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">
                <span onClick={onClickMenuItem}>Sportswear</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/119">
                <span onClick={onClickMenuItem}>Streetwear</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/120">
                <span onClick={onClickMenuItem}>Beachwear</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/260">
                <span onClick={onClickMenuItem}>Halloween</span>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/209">
                <span onClick={onClickMenuItem}>Back to school</span>
              </Link>
            </div>
          </div>
          {/* <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/227">
                <span onClick={onClickMenuItem}>Shop All Womens</span>
              </Link>
            </div>
          </div> */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;
