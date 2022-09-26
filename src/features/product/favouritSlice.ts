import { productI } from './productApiSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type favouriteI = {
    favourite: productI[];
}
const initialState: favouriteI = {
    favourite: []
}

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        //add to favourite
        addFavourite: (state, action: PayloadAction<productI>) => {
            state.favourite.push(action.payload)
        },

        //remove favourite
        removeFavourite: (state, action: PayloadAction<string>) => {
            state.favourite = state.favourite.filter((ele) => {
                return ele._id !== action.payload;
            })
        }
    }
})

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
