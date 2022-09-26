import { productI } from './productApiSlice';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type favouriteI={
    favourite:productI[];
}
const initialState:favouriteI={
    favourite:[]
}

const favouriteSlice=createSlice({
    name:'favourite',
    initialState,
    reducers:{
        //add to favourite
        addFavourite:(state,action:PayloadAction<productI>)=>{
            // if(state.favourite.find((ele) => ele._id === action.payload._id)){
            
            // }else{
            state.favourite.push(action.payload)

            // }
        },
        removeFavourite:(state,action:PayloadAction<string>)=>{
            state.favourite=state.favourite.filter((ele)=>{
                return ele._id!==action.payload;
            })
        }
    }
})

export const {addFavourite,removeFavourite}=favouriteSlice.actions;
export default favouriteSlice.reducer;
