import { FC, useState, useEffect } from "react";
import { Cateogory } from "../components/Category";
import { ProductCard } from "../components/ProductCard";
import {
  productI,
  useFetchProductsQuery,
} from "../features/product/productApiSlice";

export const Home: FC = () => {
  const [productsData, setProductsData] = useState<productI[] | null>(null);
  const { data = null, isLoading } = useFetchProductsQuery();

  // useEffect(() => {
    
  // }, [productsData]);

  return (
    <div className="">
      {/* Select Category Option */}
      <Cateogory setProductsData={setProductsData} productData={data&&data.products} />
     
    {/* Display Products */}
      {isLoading ? (
        <h1>loading....</h1>
      ) : (
        <div className="pl-20 pr-20 pt-10 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-9">
          {productsData &&
            productsData.map((product) => (
              <ProductCard product={product}  key={product._id}/>
            ))}
        </div>
      )}
    </div>
  );
};
