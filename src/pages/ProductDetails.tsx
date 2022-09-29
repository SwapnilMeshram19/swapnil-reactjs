import { FC } from "react";
import { useParams } from "react-router-dom";
import { FavouriteComponent } from "../components/FavouriteComponent";
import { useFetchProductQuery } from "../features/product/productApiSlice";

export const ProductDetails: FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetchProductQuery(id);

  return (
    <div className=''>
      {isLoading ? (
        <h1>loading....</h1>
      ) : (
        data && (
          <div className="w-10/12 p-10 m-auto md:flex">
            <div className="md:w-1/3 h-min sm:w-1 relative">
              <img
                src={data.product.avatar}
                alt={data.product.name}
                className="h-full w-full object-fill object-center lg:h-full lg:w-full shadow-lg flex rounded-md"
              />
              <FavouriteComponent product={data.product}/>
              <div className="md:flex md:gap-3 pt-5">
                <button className="bg-amber-500 md:w-1/2 sm:w-full  p-2 m-2 rounded-xl font-bold text-white">
                  ADD TO CART
                </button><br></br>
                <button className="bg-orange-500 md:w-1/2 sm:w-full  p-2 m-2 rounded-xl font-bold text-white">
                  BUY NOW
                </button>
              </div>
            </div>
            <div className='pl-5 pt-5 text-left'>
              <h1 className='text-xl font-medium'>{data.product.name}</h1>
              <h3 className='pt-5 text-lg font-normal'>Price</h3>
              <h1 className='text-2xl'>&#36;{data.product.price}</h1>
              <h3 className='pt-5 text-lg font-normal'>Product Details</h3>
              <p>{data.product.description}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};
