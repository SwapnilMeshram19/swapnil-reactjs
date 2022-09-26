import { useState, FC } from "react";
import {
  useFetchCategoryQuery,
  usePostProductMutation,
} from "../features/product/productApiSlice";
import { useNavigate} from "react-router-dom";
type InputEvent = React.ChangeEvent<HTMLInputElement>;
export const AddProduct: FC = () => {
  const [category, setCategory] = useState<string>("All");
  const [pName, setPName] = useState<string>("");
  const [price, setPrice] = useState<number | string>("");
  const [description, setDescription] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [developerEmail, setDeveloperEmail] = useState<string>("");
  const { data} = useFetchCategoryQuery();
  const [postProduct] = usePostProductMutation();
  const navigate = useNavigate();

  //Clear State of Input Fields
  function clearState() {
    setCategory("All");
    setPName("");
    setPrice("");
    setDescription("");
    setAvatar("");
    setDeveloperEmail("");
    navigate("/");
  }

  //post data to server
  const onSubmit = async () => {
    if (
      pName &&
      price &&
      category &&
      category !== "All" &&
      description &&
      avatar &&
      developerEmail
    ) {
      try {
        const product = {
          name: pName,
          price,
          category,
          description,
          avatar,
          developerEmail,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        let res = await postProduct(product).unwrap();
        if (res) {
          clearState();
          window.alert("Product added successfully");
        }
        // if(message==="Success"){
        //
      } catch (e) {
        console.log(e);
      }
    } else {
      window.alert("All fields are mandatory");
    }
  };

  return (
    <div className="md:w-1/3 m-auto mt-10">
      <h1 className="text-2xl font-bold text-left pl-2 pb-2">ADD PRODUCT</h1>

      <div className=" m-auto border-2 p-8 border-gray-300 text-left">

        {/* Product Name  */}
        <label className="block text-sm font-medium text-gray-700">
          Name of Product
        </label>
        <input
          type="text"
          value={pName}
          onChange={(event: InputEvent): void => setPName(event.target.value)}
          name="pName"
          className="block w-full flex-1 rounded-sm p-1 border-gray-400 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Product Name"
        />

        <div className="flex gap-5 justify-between mt-3">
          <div className="w-1/2">
            {/* Product Price */}
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(event: InputEvent): void =>
                setPrice(parseInt(event.target.value))
              }
              name="price"
              className="block w-full p-2 rounded-sm border-gray-400 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Price"
            />
          </div>
          <div className="w-1/2 text-left">
            {/* Select Category */}
            <label className="block text-sm font-medium text-gray-700">
              Select Category
            </label>
            <select
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                setCategory(event.target.value)
              }
              className="border-2 border-gray-400 w-full rounded-sm mt-3"
            >
              <option value="select">Select</option>
              {data &&
                data.categories.map((category) => (
                  <option value={category.name} key={category._id}>
                    {category.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        {/* Product Details */}
        <label
          htmlFor="about"
          className="block text-sm font-medium text-gray-700 mt-3"
        >
          Product Details
        </label>
        <div className="mt-1">
          <textarea
            name="description"
            value={description}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void =>
              setDescription(event.target.value)
            }
            rows={3}
            className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Product Details..."
          />
          {/* Product Avatar */}
          <label className="block text-sm font-medium text-gray-700 mt-3">
            Product Image Link
          </label>
          <input
            type="text"
            value={avatar}
            onChange={(e: InputEvent): void => setAvatar(e.target.value)}
            name="avatar"
            className="block w-full flex-1 rounded-sm p-1 border-gray-400 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Product Image Link"
          />
          {/* Developer Email */}
          <label className="block text-sm font-medium text-gray-700 mt-3">
            Developer Email
          </label>
          <input
            type="email"
            value={developerEmail}
            onChange={(e: InputEvent): void =>
              setDeveloperEmail(e.target.value)
            }
            name="developerEmail"
            className="block w-full flex-1 rounded-sm p-1 border-gray-400 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Developer Email"
          />
        </div>
        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={() => onSubmit()}
            className="rounded-md border border-transparent bg-cyan-600 py-2 px-16 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 mt-5"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};
