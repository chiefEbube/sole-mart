"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsDataProvider } from "./ProductsDataContext";


const queryClient = new QueryClient();

const ProductsDataContextProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsDataProvider>{children}</ProductsDataProvider>
    </QueryClientProvider>
  );
};

export default ProductsDataContextProvider;