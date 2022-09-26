import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/product/productApiSlice';


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getdefaultMiddleware) => {
        return getdefaultMiddleware().concat(apiSlice.middleware);
    }
})