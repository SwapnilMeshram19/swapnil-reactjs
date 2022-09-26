import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFetchProductQuery } from "../features/product/productApiSlice";

export const ProductDetails: FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetchProductQuery(id);

  return <div>{isLoading ? <h1>loading....</h1> : data && <div></div>}</div>;
};
