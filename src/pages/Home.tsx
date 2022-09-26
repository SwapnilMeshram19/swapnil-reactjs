import axios from "axios";
import { FC, useState, useEffect } from "react";
import { Cateogory } from "../components/Category";
import { ProductCard } from "../components/ProductCard";
import {
  productI,
  token,
  useFetchProductsQuery,
} from "../features/product/productApiSlice";

interface categoriesI {
  _id: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export const Home: FC = () => {
  const [productsData, setProductsData] = useState<productI[] | null>(null);
  const { data = null, isLoading } = useFetchProductsQuery();
  // const [categories, setCategories] = useState<categoriesI[] | []>([]);
  // const [category, setCategory] = useState<string>("All");
  useEffect(() => {

  }, [productsData]);

  // const FilterByCategory = () => {
  //   if (category == "All" && data) {
  //     setProductsData(data.products);
  //   } else if (data) {
  //     setProductsData(
  //       data.products.filter((product) => {
  //         return product.category === category;
  //       })
  //     );
  //   }
  // };

  return (
    <div className="">
      <Cateogory setProductsData={setProductsData} productData={data&&data.products} />
      {/* <div className="p-2 md:pl-20 lg:pl-20  flex gap-3 border-b-8">
        <h3 className="text-base font-medium">Categories:</h3>
        <select
          onChange={(event) => setCategory(event.target.value)}
          className="border-2"
        >
          <option value="All">All</option>
          {categories &&
            categories.map((category) => (
              <option value={category.name} key={category._id}>
                {category.name}
              </option>
            ))}
        </select>
      </div> */}

      {isLoading ? (
        <h1>loading....</h1>
      ) : (
        <div className="pl-20 pr-20 pt-10 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-9">
          {productsData &&
            productsData.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
        </div>
      )}
    </div>
  );
};
