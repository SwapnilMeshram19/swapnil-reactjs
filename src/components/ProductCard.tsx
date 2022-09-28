import { FC, useEffect, useState } from "react";
import { productI } from "../features/product/productApiSlice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addFavourite,
  removeFavourite,
} from "../features/product/favouritSlice";
//tumhara awaj nahi ara
export const ProductCard: FC<{ product: productI }> = ({ product }) => {
  const [available, setAvailable] = useState<boolean>(false);
  const favouriteProduct = useAppSelector((state) => state.favourite.favourite);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (favouriteProduct) {
      if (favouriteProduct.find((ele) => ele._id === product._id)) {
        setAvailable(true);
      }
    }
  }, [favouriteProduct]);


  // add to Favourite
  const handleAddFavourite = () => {
    dispatch(addFavourite(product));
    setAvailable(true);
    console.log(favouriteProduct)
  };

  // remove from favourite
  const handleRemoveFavourite = () => {
    dispatch(removeFavourite(product._id));
    setAvailable(false);
    console.log(favouriteProduct)
  };

  return (
    
    <div className="group relative drop-shadow-lg">
      {/* Product Card */}
      <Link to={`/product/${product._id}`}>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-72 sm:h-72 md:h-40">
          <img
            src={product.avatar}
            alt={product.name}
            className="h-full w-full object-fill object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex pl-2 pr-2 justify-between">
          <h3 className="text-sm text-gray-700 w-1/2 text-left">
            {product.name}
          </h3>
          <p className="text-sm font-medium text-gray-900 ">
            &#36; {product.price}
          </p>
        </div>
      </Link>

      {/* Favourite Icon */}
      {available ? (
        <div
          className="rounded-full  border-gray-200 shadow-none absolute top-2 right-2"
          onClick={() => handleRemoveFavourite()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 cursor-pointer text-red-500 "
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>
      ) : (
        <div
          className="rounded-full  border-gray-200 shadow-none absolute top-2 right-2"
          onClick={() => handleAddFavourite()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 cursor-pointer text-gray-400 "
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>
      )}
    </div>
  );
};
