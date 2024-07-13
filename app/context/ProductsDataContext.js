"use client"

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ProductsDataContext = createContext();


export const ProductsDataProvider = ({ children }) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const params = {
                organization_id: process.env.NEXT_PUBLIC_ORGANIZATION_ID,
                page: 1,
                size: 20,
                Appid: process.env.NEXT_PUBLIC_APPID,
                Apikey: process.env.NEXT_PUBLIC_APIKEY,
            };
            const apiUrl = 'https://timbu-get-all-products.reavdev.workers.dev/'


            const response = await axios.get(apiUrl, { params });
            return response.data;
        }
    });

    return (
        <ProductsDataContext.Provider value={{ items: data?.items, isLoading, error }}>
            {children}
        </ProductsDataContext.Provider>
    )
}


export const useProductsData = () => {
    return useContext(ProductsDataContext)
}