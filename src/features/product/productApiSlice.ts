import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { queryAllByAltText } from '@testing-library/react';


export const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN3YXBuaWxtMTkwOEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vU3dhcG5pbE1lc2hyYW0xOSIsImlhdCI6MTY2Mzk2MjMwMywiZXhwIjoxNjY0Mzk0MzAzfQ.rgU86kXWKxzV435_sAZtkLIFTwSNstXSHETG13vUGII";



export interface productI {
    _id: string,
    name: string,
    avatar: string,
    description: string,
    price: number,
    category: string,
    developerEmail?: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}

interface categoriesI {
    _id: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  }
  
interface fetchProductsI {
    message: string,
    products: productI[]
}
interface fetchCategoryI{
    message:string,
    categories:categoriesI[]
}
interface fetchProductI {
    message: string,
    product: productI
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://upayments-studycase-api.herokuapp.com/api',
        prepareHeaders(headers) {
            headers.set('Authorization', `Bearer ${token}`);
            return headers;
        }
    }),
    endpoints(builder) {
        return {
            fetchProducts: builder.query<fetchProductsI, void>({
                query() {
                    return '/products';
                }
            }),
            fetchProduct: builder.query<fetchProductI, string | void>({
                query(id) {
                    return `/products/${id}`;
                }
            }),
            fetchCategory:builder.query<fetchCategoryI,void>({
                query() {
                    return `/categories/`;
                }
            })
        }
    }
})

export const { useFetchProductQuery, useFetchProductsQuery,useFetchCategoryQuery } = apiSlice;