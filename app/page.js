"use client"
import { useProductsData } from "./context/ProductsDataContext";
import ProductsList from "@/app/components/ProductsList";
import Image from "next/image";
import { FaAngleRight, FaChevronDown } from "react-icons/fa6";
import productsData from "@/data/products.json"
import Link from "next/link";


export default function Home() {
  const {items, isLoading, error} = useProductsData()
  if (isLoading) {
    return <p>Loading...</p>; }

if (error) {
    return <p>Failed to fetch product data"</p>;}

  return (
    <div className="mb-16 md:mb-24">
      <header className="bg-greyBg flex items-center lg:justify-between mx-4 lg:mx-16 p-4 md:pl-8 lg:pl-14 rounded-2xl">
        <div className="mr-18">
          <h3 className="text-primaryBg poppins text-xl sm:text-3xl md:text-5xl w-[170px] sm:w-[300px] md:w-[450px] lg:text-[42px] lg:h-[162px] font-bold">Grab Up to 5% Off On Selected Shoe</h3>
          <Link href={"#collections"}>
            <div className="sm:ml-8 lg:ml-12 flex items-center justify-center w-28 py-2 sm:py-3 lg:py-0 mt-4 md:mt-8 lg:mt-0 lg:w-[136px] lg:h-[49px] bg-btn text-plainWhite text-sm sm:text-base rounded-xl lg:rounded-3xl inter font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-90 duration-300">
              Buy Now
            </div>
          </Link>
        </div>
        <div className="h-full lg:w-[612px] lg:h-[361px] -mr-6 -mt-12 lg:-mr-16">
          <img src="/assets/images/black-shoe.png" className="w-full h-full object-cover" />
        </div>
      </header >

      <section id="collections">
        <h1 className="text-center mt-16 md:mt-28 mb-6 lg:mb-16 font-bold text-[13px] sm:text-2xl uppercase text-[#231F20] poppins">Browse Our Collections</h1>
        <ProductsList products={items} />
      </section>

      <section className="w-full bg-[#D9D9D9] p-3 md:px-10 md:py-1 mt-16">
        <div className="flex gap-2 md:gap-5 lg:w-7/8 lg:mx-auto items-center justify-around">
          <Image src='/assets/images/profile.png' width={150} height={150}  className="hidden md:block"/>
          <Image src='/assets/images/profile.png' width={80} height={80}  className="md:hidden"/>
          <div className="md:w-3/5 openSans">
            <div className="text-[#717171] italic text-xs sm:text-sm md:text-xl font-normal">
              I recently purchased a pair of sneakers from SoleMart, and I couldn't be happier with my experience. The website was easy to navigate, and I found exactly what I was looking for within minutes.
            </div>
            <div className="openSans text-xs sm:text-sm lg:text-2xl font-semibold text-[#0469AD] mt-2 md:mt-5 md:-mb-2">Joshua Kim</div>
          </div>
        </div>

      </section>
    </div >
  );
}
