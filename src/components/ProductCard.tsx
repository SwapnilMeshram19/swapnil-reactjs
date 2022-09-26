import { FC } from "react";
import { productI } from "../features/product/productApiSlice";
import { Link } from "react-router-dom";

export const ProductCard: FC<{ product: productI }> = ({ product }) => {
  return (
    <div className="group relative drop-shadow-lg">
      <Link to={`/product/${product._id}`}>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-72 sm:h-72 md:h-40">
          <img
            src={product.avatar}
            alt={product.name}
            className="h-full w-full object-fill object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex pl-2 pr-2 justify-between">
          <h3 className="text-sm text-gray-700">{product.name}</h3>
          <p className="text-sm font-medium text-gray-900">
            &#36; {product.price}
          </p>
        </div>
      </Link>
    </div>
  );
};
