import {createContext,useState,FC} from 'react';
// import { useAppDispatch, useAppSelector } from "../app/hooks";
// import {
//   addFavourite,
//   removeFavourite,
// } from "../features/product/favouritSlice";
// import { productI } from '../features/product/productApiSlice';

// interface favouriteContextI{
//     available:boolean;
//     checkAvailable:(id:string)=>void;
//     handleAddFavourite:(product:productI)=>void;
//     handleRemoveFavourite:(product:productI)=>void;
// }
// interface Props {
//     children: React.ReactNode;
//   }
// export const FavouriteContext=createContext<favouriteContextI|undefined>(undefined);
// export const FavouriteProvider=({children}:Props)=>{
// const [available, setAvailable] = useState<boolean>(false);
// const favouriteProduct = useAppSelector((state) => state.favourite.favourite);
// const dispatch = useAppDispatch();

// const checkAvailable=(id:string)=>{
    
// if (favouriteProduct) {
//         if (favouriteProduct.find((ele) => ele._id ===id)) {
//           setAvailable(true);
//         }
//       }
//  }

//  const handleAddFavourite = (product:productI) => {
//     dispatch(addFavourite(product));
//     setAvailable(true);
//     console.log(favouriteProduct)
//   };

//   const handleRemoveFavourite = (product:productI) => {
//     dispatch(removeFavourite(product._id));
//     setAvailable(false);
//     console.log(favouriteProduct)
//   };


// const value={
//     available,
//     checkAvailable,
//     handleAddFavourite,
//     handleRemoveFavourite
// }

//     return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
// }
