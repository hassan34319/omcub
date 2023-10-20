"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Carousel from "./Carousel";
import Scrollbar from "./Scrollbar";
import { productProps, variantDetailProps } from "../types";
import { addItem, increaseCount, itemType } from "../redux/reducers/cartSlice";

function DisplayProduct(props: productProps) {
  const { productDetail, variantDetail } = props;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeVariant, setActiveVariant] = useState<variantDetailProps>(
    variantDetail[0]
  );
  const [variantToggle, setVariantToggle] = useState<boolean>(false);
  const [sizeVariants, setSizeVariants] = useState<string[]>([
    "S",
    "M",
    "L",
    "XL",
    "2XL",
  ]);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const dispatch = useDispatch()
  const cart = useSelector((state: any) => state.cart);


  const initialiseProducts = () => {
    variantDetail?.forEach((variant: variantDetailProps) => {
      variant.size = variant?.title?.split(" ")[variant?.title?.split(" ").length - 1];
      variant.color = variant?.title?.split(" ").length>3 ? `${variant?.title?.split(" ")[0]}-${variant?.title?.split(" ")[1]}` : variant?.title?.split(" ")[0];
    });

    let arr = productDetail?.productImages;
    arr = arr.filter(
      (image) =>
        image?.productVariantIds.length === productDetail?.sizeVariants.length
    );
    productDetail.productImages = arr;

    const temp = variantDetail?.find(
      (product) =>
        product?.id === productDetail?.productImages[0]?.productVariantIds[0]
    );
    setActiveVariant(temp);
    setSizeVariants(
      productDetail?.sizeVariants.map((variant) => variant?.size)
    );
    setIsLoading(false);
  };

  useEffect(() => {
    setIsMounted(true);
    initialiseProducts();
  }, []);

  useEffect(() => {
    const sampleId = productDetail?.productImages[currentIndex]?.productVariantIds[0];
    const currentColor = variantDetail?.find((variant) => variant?.id === sampleId)?.color;
    const currentSize = activeVariant?.size;

    setActiveVariant(variantDetail?.find((variant) => variant?.size === currentSize && variant?.color === currentColor));
  }, [currentIndex]);

  if (!isMounted) return null;

  const variantColorToggle = (ids: string[], index: number) => {
    const currentSize = activeVariant?.size;
    const possible = variantDetail?.filter((variant) =>
      ids?.includes(variant.id)
    );

    setActiveVariant(
      possible?.find((variant) => variant?.size === currentSize)
    );
    setCurrentIndex(index);

    setVariantToggle((prev) => !prev);
  };

  const variantSizeToggle = (size: string) => {
    const currentColor = activeVariant?.color;
    setActiveVariant(
      variantDetail?.find(
        (variant) => variant?.size === size && variant?.color === currentColor
      )
    );

    setVariantToggle((prev) => !prev);
  };

  const addToCart = () => {
    const currentUid = productDetail?.uid.replace("[COLOR]", activeVariant?.color?.toLowerCase()).replace("[SIZE]", activeVariant?.size?.toLowerCase())
    const exists = cart?.items?.findIndex((item) => item?.uid === currentUid)

    if (exists === -1) {
        const data: itemType = {
            id: productDetail?.id,
            uid: currentUid,
            title: `${productDetail?.title} - ${activeVariant?.color} ${activeVariant?.size}`,
            description: productDetail?.description,
            image: productDetail?.imageUrl?.[0],
            printUrl: productDetail?.printUrl,
            price:  parseFloat(productDetail?.sizeVariants?.find((variant: variantDetailProps) => variant?.size === activeVariant?.size)?.price),
            quantity: 1,
            totalPrice: parseFloat(productDetail?.sizeVariants?.find((variant: variantDetailProps) => variant?.size === activeVariant?.size)?.price),
        }
        dispatch(addItem(data))
    } else {
        dispatch(increaseCount(currentUid))
    }
  }

  if (isLoading) return <>Loading...</>;

  return (
    <>
      <Scrollbar />
      <div className="product bg-[#f9f9f9]">
        <div className="wrapper lg:flex w-4/5 m-auto ">
          <div className="carousel flex-1">
            <Carousel
              images={productDetail?.productImages}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
          <div className="product_form 2xl:w-3/12 md:w-2/6">
            <div className="title flex justify-between pt-6 pb-2 items-start">
              <div className="heading font-serif text-[22px] w-3/4">
                {productDetail.title}
              </div>
              <div className="price text-xl font-bold">
                $
                {
                  productDetail?.sizeVariants?.find(
                    (variant: variantDetailProps) =>
                      variant?.size === activeVariant?.size
                  )?.price
                }
              </div>
            </div>
            <div className="info text-[13px] border-b border-gray-300 pb-4">
              <div className="rating"></div>
            </div>
            <div className="variants my-6">
              <div className="tile text-[13px] text-[#736b67]">
                {activeVariant && activeVariant?.color?.replace('-', ' ')}
              </div>
              <div className="variant_catalogue grid grid-cols-4 gap-2 py-4">
                {productDetail?.productImages?.map((image, index) => {
                  return (
                    <div
                      key={image.id}
                      data-id={image.id}
                      className={`w-[70px] h-[auto] item mr-[7px] mb-[7px] border ${
                        currentIndex === index ? "border-2 border-black" : ""
                      }`}
                      style={{
                        backgroundImage: `url(${image?.fileUrl})`,
                        height: "5rem",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "inherit",
                        backgroundPosition: "center",
                      }}
                      onClick={() =>
                        variantColorToggle(image?.productVariantIds, index)
                      }
                    ></div>
                  );
                })}
              </div>
            </div>
            <div className="sizes">
              <div className="title flex justify-between">
                <div className="heading">Select Size</div>
                <div className="guide"></div>
              </div>

              <div className="size-list flex  flex-wrap">
                {sizeVariants?.map((size, index) => {
                  return (
                    <div
                      key={index}
                      data-id={index}
                      className={`box cursor-pointer border-2 px-4 py-3 text-[13px] 
                       ${activeVariant?.size === size && "active"}
                        `}
                      onClick={() => variantSizeToggle(size)}
                    >
                      {size}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="action_btn my-4">
              <button
                type="submit"
                className="snipcart-add-item bg-[#f15a31] hover:bg-black text-white w-full py-3 duration-200 hover:ease-out"
                onClick={addToCart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayProduct;
