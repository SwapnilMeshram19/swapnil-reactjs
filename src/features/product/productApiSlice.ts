import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjJtZW5hdmplZXRAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL1RoYW5uenoiLCJpYXQiOjE2NjQ0NzAyNTgsImV4cCI6MTY2NDkwMjI1OH0.Uus4GLOJf8Wf3Pevc2FPcPtsXc-owwd1UcH1nh6MVro";



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

const product:productI[]=[];
export interface postProductI {
    _id?: string,
    name: string,
    avatar: string,
    description: string,
    price: number | string,
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
interface fetchCategoryI {
    message: string,
    categories: categoriesI[]
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
            //get products
           fetchProducts: builder.query<fetchProductsI, void>({
                
            query() {
                    return '/products';
                }

            }),

            //get product by id
            fetchProduct: builder.query<fetchProductI, string | void>({
                query(id) {
                    return `/products/${id}`;
                }
            }),

            //add product
            postProduct: builder.mutation<postProductI, Partial<postProductI>>({
                query(body) {
                    return {
                        url: '/products',
                        method: 'POST',
                        body
                    }
                }
            }),

            // deleteProduct: builder.mutation<fetchProductI, Partial<postProductI>>({
            //     query(body) {
            //         return {
                       
            //         }
            //     }
            // }),


            //get Category

            fetchCategory: builder.query<fetchCategoryI, void>({
                query() {
                    return `/categories/`;
                }
            })
        }
    }
})

export const { useFetchProductQuery, useFetchProductsQuery, useFetchCategoryQuery, usePostProductMutation } = apiSlice;