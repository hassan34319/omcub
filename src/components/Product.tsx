// import { useState } from "react";
// import Image from "next/image";

// // import useWishlistDispatch from "../hooks/useWishlistDispatch";
// // import useWishlistState from "../hooks/useWishlistState";

// import VariantPicker from "./VariantPicker";
// import Link from "next/link";
// import { OmcubSyncProduct } from "../../services/printful/allSyncProductTypes";

// const Product = (product: OmcubSyncProduct) => {
//   // console.log(product);

//   // const { addItem } = useWishlistDispatch();
//   // const { isSaved } = useWishlistState();

//   // return <>dfd</>;

import React from 'react'

const Product = () => {
  return (
    <></>
  )
}

export default Product
//   const { id, name, variants } = product;
//   // const [firstVariant] = variants;
//   // const oneStyle = variants.length === 1;

//   const [activeVariantExternalId, setActiveVariantExternalId] = useState();
//   // firstVariant.external_id

//   // const activeVariant = variants.find(
//   //   (v) => v.external_id === activeVariantExternalId
//   // );

//   // const activeVariantFile = activeVariant.files.find(
//   //   ({ type }) => type === "preview"
//   // );

//   // const formattedPrice = new Intl.NumberFormat("en-US", {
//   //   style: "currency",
//   //   currency: activeVariant.currency,
//   // }).format(activeVariant.retail_price);

//   const addToWishlist = () => addItem(product);

//   const onWishlist = isSaved(id);

//   return (
//     <div className="product mb-6 px-6">
//       <div className="product_container">
//         <div className="top flex items-center justify-between my-2">
//           <div className="tile_note text-xs text-orange-400">NEW ARRIVAL</div>
//           <button
//             aria-label="Add to wishlist"
//             className="appearance-none  top-0 right-0  text-gray-300 focus:text-gray-500 hover:text-red-500 transition focus:outline-none"
//             onClick={addToWishlist}
//           >
//             {onWishlist ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 className="w-6 h-6 fill-current text-red-500"
//               >
//                 <path fill="none" d="M0 0H24V24H0z" />
//                 <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 className="w-6 h-6 fill-current"
//               >
//                 <path fill="none" d="M0 0H24V24H0z" />
//                 <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
//               </svg>
//             )}
//           </button>
//         </div>

//         <Link href={`/product/${product.id}`}>
//           <div className="group image cursor-pointer">
//             {/* <img src="/images/shirt1.webp" alt="Shirt 1" /> */}
//             <img
//               src={product.thumbnail_urls[0] || ""}
//               width={250}
//               height={250}
//               alt={`${product.name} ${name}`}
//               title={`${product.name} ${name}`}
//               className={`object-cover aspect-square ${
//                 product.thumbnail_urls.length > 1
//                   ? "block group-hover:hidden"
//                   : ""
//               }`}
//             />
//             {product.thumbnail_urls[1] && (
//               <img
//                 src={product.thumbnail_urls[1] || ""}
//                 width={250}
//                 height={250}
//                 alt={`${product.name} ${name}`}
//                 title={`${product.name} ${name}`}
//                 className="object-cover hidden group-hover:block aspect-square"
//               />
//             )}
//           </div>
//         </Link>
//         <div className="info flex justify-between border-t border-gray-300 pt-3">
//           <Link href={`/product/${product.id}`}>
//             <div className="title text-base font-bold font-serif cursor-pointer">
//               {product.name.length > 55
//                 ? product.name.substring(0, 55) + "..."
//                 : product.name}
//             </div>
//           </Link>
//           {/* <div className="price">$89</div> */}
//         </div>
//         {/* <div className="options text-xs py-1">{product.brand}</div> */}
//         {/* <div className="category text-xs">{product.type_name}</div> */}
//         <div className="rating"></div>
//       </div>
//     </div>
//     // <article className="bg-gray flex flex-col relative mb-8 px-6">
//     //   <button
//     //     aria-label="Add to wishlist"
//     //     className="appearance-none absolute top-0 right-0 mt-3 mr-3 text-gray-300 focus:text-gray-500 hover:text-red-500 transition focus:outline-none"
//     //     onClick={addToWishlist}
//     //   >
//     //     {onWishlist ? (
//     //       <svg
//     //         xmlns="http://www.w3.org/2000/svg"
//     //         viewBox="0 0 24 24"
//     //         className="w-6 h-6 fill-current text-red-500"
//     //       >
//     //         <path fill="none" d="M0 0H24V24H0z" />
//     //         <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
//     //       </svg>
//     //     ) : (
//     //       <svg
//     //         xmlns="http://www.w3.org/2000/svg"
//     //         viewBox="0 0 24 24"
//     //         className="w-6 h-6 fill-current"
//     //       >
//     //         <path fill="none" d="M0 0H24V24H0z" />
//     //         <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
//     //       </svg>
//     //     )}
//     //   </button>
//     //   <div className="flex items-center justify-center flex-1 sm:flex-shrink-0 w-full p-6">
//     //     {product?.image && (
//     //       <Image
//     //         src={product.image}
//     //         width={250}
//     //         height={250}
//     //         alt={`${product.name} ${name}`}
//     //         title={`${product.name} ${name}`}
//     //       />
//     //     )}
//     //   </div>
//     //   {/* <div className="flex-1 p-6 pt-0">
//     //   <div className="text-center">
//     //     <p className="mb-1 font-semibold text-gray-900">{name}</p>
//     //     <p className="text-sm text-gray-500">{formattedPrice}</p>
//     //   </div>
//     // </div> */}
//     //   <div className="info flex justify-between border-t border-gray-300 pt-3">
//     //     <div className="title text-base font-bold font-serif">
//     //       {product.title.length > 15
//     //         ? product.title.substring(0, 15) + "..."
//     //         : product.title}
//     //     </div>
//     //     <div className="price">${product.id}</div>
//     //   </div>
//     //   {/* <div className="p-3 flex flex-col sm:flex-row justify-center items-center">
//     //   <VariantPicker
//     //     value={activeVariantExternalId}
//     //     onChange={({ target: { value } }) =>
//     //       setActiveVariantExternalId(value)
//     //     }
//     //     variants={variants}
//     //     disabled={oneStyle}
//     //   />
//     //   <button
//     //     className="snipcart-add-item w-full md:w-auto transition flex-shrink-0 py-2 px-4 border border-gray-300 hover:border-transparent shadow-sm text-sm font-medium bg-white text-gray-900 focus:text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:outline-none rounded"
//     //     data-item-id={activeVariantExternalId}
//     //     data-item-price={activeVariant.retail_price}
//     //     data-item-url={`/api/products/${activeVariantExternalId}`}
//     //     data-item-description={activeVariant.name}
//     //     data-item-image={activeVariantFile?.preview_url}
//     //     data-item-name={name}
//     //   >
//     //     Add to Cart
//     //   </button>
//     // </div> */}
//     // </article>
//   );
// };

// export default Product;
