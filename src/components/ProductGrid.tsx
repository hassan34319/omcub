import { OmcubSyncProduct } from "../../services/printful/allSyncProductTypes";
import Product from "./Product";

const ProductGrid = ({ products }: { products: OmcubSyncProduct[] }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="grid gap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
