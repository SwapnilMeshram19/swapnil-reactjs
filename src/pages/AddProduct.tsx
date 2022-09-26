import { useState,FC } from "react";
import { useFetchCategoryQuery } from "../features/product/productApiSlice";
interface proI {
  name: string;
  price: number;
  description: string;
  avatar: string;
  developerEmail: string;
  category: string;
}
const initialValue = {
  name: "",
  price: 0,
  description: "",
  avatar: "",
  developerEmail: "",
  category: "",
};
export const AddProduct:FC = () => {
  const [category, setCategory] = useState<string>("All");
//   const [name, setName] = useState<string | null>(null);
//   const [price, setPrice] = useState<number | null>(null);
//   const [Description, setDescription] = useState<string | null>(null);
//   const [Avatar, setAvatar] = useState<string | null>(null);
//   const [DeveloperEmail, setDeveloperEmail] = useState<string | null>(null);
const [value,setValue]=useState<any>()
  const [values, setValues] = useState<proI>(initialValue);
  const { data, isLoading } = useFetchCategoryQuery();

  const handleInputChange:React.ChangeEventHandler<HTMLInputElement>= (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="md:w-1/3 m-auto mt-10">
      <h1 className="text-2xl font-bold text-left pl-2 pb-2">ADD PRODUCT</h1>
      <form action="#">
        <div className=" m-auto border-2 p-8 border-gray-300 text-left">
          <label className="block text-sm font-medium text-gray-700">
            Name of Product
          </label>
          <input
            type="text"
            value={value.name}
            onChange={handleInputChange}
            name="name"
            className="block w-full flex-1 rounded-sm p-1 border-gray-400 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Product Name"
          />

          <div className="flex gap-5 justify-between mt-3">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                value={value.price}
                onChange={() => handleInputChange}
                name="price"
                className="block w-full p-2 rounded-sm border-gray-400 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Price"
              />
            </div>
            <div className="w-1/2 text-left">
              <label className="block text-sm font-medium text-gray-700">
                Select Category
              </label>
              <select
                onChange={(event:React.ChangeEventHandler<HTMLInputElement>) => setCategory(event.target.value)}
                className="border-2 border-gray-400 w-full rounded-sm mt-3"
              >
                <option value="select">Select</option>
                {isLoading ? (
                  <div></div>
                ) : (
                  data &&
                  data.categories.map((category) => (
                    <option value={category.name} key={category._id}>
                      {category.name}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700 mt-3"
          >
            Product Details
          </label>
          <div className="mt-1">
            <textarea
              name="description"
              value={value.description}
              onChange={() => handleInputChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Product Details..."
              defaultValue={""}
            />
            <label className="block text-sm font-medium text-gray-700 mt-3">
              Product Image Link
            </label>
            <input
              type="text"
              value={value.avatar}
              onChange={() => handleInputChange}
              name="avatar"
              className="block w-full flex-1 rounded-sm p-1 border-gray-400 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Product Image Link"
            />
            <label className="block text-sm font-medium text-gray-700 mt-3">
              Developer Email
            </label>
            <input
              type="email"
              value={value.developerEmail}
              onChange={() => handleInputChange}
              name="developerEmail"
              className="block w-full flex-1 rounded-sm p-1 border-gray-400 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Developer Email"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-16 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 mt-5"
            >
              ADD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
