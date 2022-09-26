import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { removeFavourite } from "../features/product/favouritSlice";
import { Link } from "react-router-dom";

export const Favourite: FC = () => {
  const favouriteProduct = useAppSelector((state) => state.favourite);
  const dispatch = useAppDispatch();

  return (
    <div>
      {/* Display Favourite Products */}
      {favouriteProduct &&
        favouriteProduct.favourite.map((prod) => (
          <div className="text-left m-10 md:ml-28 flex">
            <Link to={`/product/${prod._id}`}>
              <div className="w-40 h-32  overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                <img
                  src={prod.avatar}
                  alt={prod.name}
                  className=" w-full h-full object-fill object-center lg:h-full lg:w-full"
                />
              </div>
            </Link>
            <div className="pl-5 border-2 py-4 px-10 w-fit rounded-md flex flex-col justify-between">
              <Link to={`/product/${prod._id}`}>
                <h1 className="font-medium">{prod.name}</h1>
                <div className="flex gap-1">
                  <span className=" text-gray-600">Price:</span>
                  <h1 className="font-medium"> &#36;{prod.price}</h1>
                </div>
              </Link>
              {/* Remove From Favourite Button */}
              <button
                onClick={() => dispatch(removeFavourite(prod._id))}
                className="text-left w-fit  rounded-md border border-transparent bg-red-500 py-2 px-14 text-sm font-medium text-white shadow-sm hover:bg-red-700 "
              >
                Remove
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
