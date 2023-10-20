import { getProduct } from "../../../../services/sanity/fetchGelatoProducts";
import DisplayProduct from "../../../components/DisplayProduct";
import { productProps } from "../../../types";


const getData = async (id: string) => {
  const productInfo: productProps = await getProduct([id]);

  return productInfo;
}

async function Product({params}) {
  const productInfo: productProps = await getData(params.id);
  const { productDetail, variantDetail } = productInfo;


  return <DisplayProduct productDetail={productDetail} variantDetail={variantDetail} />
}


export default Product;
