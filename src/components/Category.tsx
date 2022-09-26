import { FC, useEffect, useState } from "react";
import {
  productI,
  useFetchCategoryQuery,
} from "../features/product/productApiSlice";

interface propsI {
  productData: productI[] | null;
  setProductsData: any;
}

export const Cateogory: FC<propsI> = (props) => {
  const { productData, setProductsData } = props;
  const { data} = useFetchCategoryQuery();
  const [category, setCategory] = useState<string>("All");
  useEffect(() => {
    FilterByCategory();
  }, [category, productData]);

  // Filtering BY Category
  const FilterByCategory = () => {
    if (category === "All") {
      setProductsData(productData);
    } else if (data) {
      setProductsData(
        productData &&
          productData.filter((product) => {
            return product.category === category;
          })
      );
    }
  };

  // console.log(props)

  return (
    <div className="p-2 md:pl-20 lg:pl-20  flex gap-3 border-b-8">
      <h3 className="text-base font-medium">Categories:</h3>
      {/* select category */}
      <select
        onChange={(event) => setCategory(event.target.value)}
        className="border-2"
      >
        <option value="All">All</option>
        {data &&
          data.categories.map((category) => (
            <option value={category.name} key={category._id}>
              {category.name}
            </option>
          ))}
      </select>
    </div>
  );
};
