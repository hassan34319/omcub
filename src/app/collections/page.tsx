// import ProductGrid from "../../components/ProductGrid";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import { getSyncProductsWithSanityData } from "../../../services/printful/getSyncProduct";
// import { OmcubSyncProduct } from "../../../services/printful/allSyncProductTypes";

// function Collections({
//   products,
//   category,
//   categories,
//   isLoading,
//   setIsLoading,
// }: {
//   products: OmcubSyncProduct[];
//   [key: string]: any;
// }) {
//   // return <h1>df</h1>;
//   // const [isLoading, SetisLoading] = useState(true);

//   // return <h1></h1>;

//   const router = useRouter();

//   useEffect(() => {
//     setIsLoading(true);
//     // console.log(category, "page loaded");
//   }, []);

//   // useEffect(() => {
//   //   SetisLoading(false);
//   //   console.log("Category changed");
//   // }, [categoryFlag]);

//   useEffect(() => {
//     // SetisLoading((prev) => !prev);
//     setIsLoading(false);
//     // console.log("Products changed");
//   }, [products]);

//   if (isLoading) {
//     return (
//       <div className="loader">
//         <img
//           src="/images/loader.svg"
//           alt="Loader"
//           style={{ margin: "20% auto" }}
//         />
//       </div>
//     );
//   } else
//     return (
//       <>
//         {/* <div className="categories">
//           {categoriesLists.categories.map((category) => (
//             <h3 key={category.id}>{category.title + " " + category.id}</h3>
//           ))}
//         </div> */}

//         {/* <div className="scrollbar border-b border-t border-gray-200">
//           <div className="px-4">
//             <div className="flex py-4 overflow-scroll">
//               <div className="category active">
//                 <button className="text-white bg-[#f15a31] px-4 py-2 text-sm rounded mr-2 w-max">
//                   Shop All
//                 </button>
//               </div>
//               <div className="category">
//                 <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2 w-max">
//                   Short Sleeve
//                 </button>
//               </div>
//               <div className="category">
//                 <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2 w-max">
//                   Long Sleeve
//                 </button>
//               </div>
//               <div className="category">
//                 <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2 w-max">
//                   Sleeveless
//                 </button>
//               </div>
//               <div className="category">
//                 <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2 w-max">
//                   Tees
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         <div className="collection">
//           <div className="main">
//             <div className="wrapper mx-auto max-w-[90%]">
//               <div className="title text-center py-12">
//                 <div className="heading text-4xl">
//                   <h1 className="font-semibold">{category.title}</h1>
//                   {/* <h1 className="font-semibold">{category.title}</h1> */}
//                 </div>
//                 <div className="sub text-xs text-[#77706c] py-1">
//                   There&apos;s a story in every stitch
//                 </div>
//               </div>
//               <div className="categories flex pb-6 border-b border-gray-200">
//                 <div className="category active">
//                   <Link href="/collections/226">
//                     <button className="text-white bg-[#f15a31] px-4 py-2 text-sm rounded mr-2">
//                       Shop All
//                     </button>
//                   </Link>
//                 </div>
//                 {/* <div className="category">
//                   <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2">
//                     Short Sleeve
//                   </button>
//                 </div>
//                 <div className="category">
//                   <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2">
//                     Long Sleeve
//                   </button>
//                 </div> */}
//               </div>

//               <div className="filters my-6">
//                 {/* <button className="border border-black rounded-2xl px-4">
//                 Filters
//               </button> */}
//               </div>

//               <div className="catalogue grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
//                 <div className="product mb-6 px-6">
//                   <div className="product_container">
//                     <div className="tile_note text-xs text-orange-400">
//                       NEW ARRIVAL
//                     </div>
//                     <div className="image">
//                       <img src="/images/shirt1.webp" alt="Shirt 1" />
//                     </div>
//                     <div className="info flex justify-between border-t border-gray-300 pt-3">
//                       <div className="title text-base font-bold font-serif">
//                         Bless Up Breathable Stretch Shirt
//                       </div>
//                       <div className="price">$89</div>
//                     </div>
//                     <div className="options text-xs py-1">Hinano Dark Navy</div>
//                     <div className="category text-xs">Shirt</div>
//                     <div className="rating"></div>
//                   </div>
//                 </div>
//                 <div className="product mb-6 px-6">
//                   <div className="product_container">
//                     <div className="tile_note text-xs text-orange-400">
//                       NEW ARRIVAL
//                     </div>
//                     <div className="image">
//                       <img src="/images/shirt1.webp" alt="Shirt 1" />
//                     </div>
//                     <div className="info flex justify-between border-t border-gray-300 pt-3">
//                       <div className="title text-base font-bold font-serif">
//                         Bless Up Breathable Stretch Shirt
//                       </div>
//                       <div className="price">$89</div>
//                     </div>
//                     <div className="options text-xs py-1">Hinano Dark Navy</div>
//                     <div className="category text-xs">Shirt</div>
//                     <div className="rating"></div>
//                   </div>
//                 </div>
//                 <div className="product mb-6 px-6">
//                   <div className="product_container">
//                     <div className="tile_note text-xs text-orange-400">
//                       NEW ARRIVAL
//                     </div>
//                     <div className="image">
//                       <img src="/images/shirt1.webp" alt="Shirt 1" />
//                     </div>
//                     <div className="info flex justify-between border-t border-gray-300 pt-3">
//                       <div className="title text-base font-bold font-serif">
//                         Bless Up Breathable Stretch Shirt
//                       </div>
//                       <div className="price">$89</div>
//                     </div>
//                     <div className="options text-xs py-1">Hinano Dark Navy</div>
//                     <div className="category text-xs">Shirt</div>
//                     <div className="rating"></div>
//                   </div>
//                 </div>
//                 <div className="product mb-6 px-6">
//                   <div className="product_container">
//                     <div className="tile_note text-xs text-orange-400">
//                       NEW ARRIVAL
//                     </div>
//                     <div className="image">
//                       <img src="/images/shirt1.webp" alt="Shirt 1" />
//                     </div>
//                     <div className="info flex justify-between border-t border-gray-300 pt-3">
//                       <div className="title text-base font-bold font-serif">
//                         Bless Up Breathable Stretch Shirt
//                       </div>
//                       <div className="price">$89</div>
//                     </div>
//                     <div className="options text-xs py-1">Hinano Dark Navy</div>
//                     <div className="category text-xs">Shirt</div>
//                     <div className="rating"></div>
//                   </div>
//                 </div>
//               </div>

//               <ProductGrid products={products} />
//             </div>
//           </div>
//         </div>
//       </>
//     );
// }

// export const getServerSideProps = async (context) => {
//   const response = await getSyncProductsWithSanityData([context.params.id]);
//   const productResponse = await fetch(
//     `https://api.printful.com/store/products?category_id=${context.params.id}`,
//     {
//       headers: {
//         Authorization: "Bearer WMrkZspe4PkOWW3Jy76VVWdJ6fkagMd9XOst78mI",
//       },
//     }
//   );
//   const products = await productResponse.json();

//   const categoriesResponse = await fetch(
//     `https://api.printful.com/categories/${context.params.id}`
//   );
//   const category = await categoriesResponse.json();

//   const categoriesList = await fetch(`https://api.printful.com/categories`);
//   const categories = await categoriesList.json();

//   return {
//     props: {
//       allProducts: products,
//       products: response.result,
//       category: category.result.category,
//       categories: categories.result,
//       // products: shuffle(products),
//     },
//   };
// };

// export default Collections;
import React from 'react'

const Collections = () => {
  return (
    <div>Collections</div>
  )
}

export default Collections