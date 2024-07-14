"use client"
import { useProductsData } from "@/app/context/ProductsDataContext";
import ProductsList from "@/app/components/ProductsList";

const AllProducts = ({heading}) => {
    const { items, isLoading, error } = useProductsData()
    if (isLoading) {
        return <p className="text-center my-10 italic text-footerBg">Loading items...</p>;
    }

    if (error) {
        return <p>Failed to fetch product data"</p>;
    }
    return (
        <section id="collections">
            <h1 className="text-center mt-16 md:mt-28 mb-6 lg:mb-16 font-bold text-[13px] sm:text-2xl uppercase text-[#231F20] poppins">{heading}</h1>
            <ProductsList products={items} />
        </section>
    )
}

export default AllProducts