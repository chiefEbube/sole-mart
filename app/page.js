import ProductsList from "@/app/components/ProductsList";
import Image from "next/image";
import { FaAngleRight, FaChevronDown } from "react-icons/fa6";
import productsData from "@/data/products.json"
import Link from "next/link";


export default function Home() {
  return (
    <div className="mb-24 w-screen">
      <header className="bg-greyBg flex items-center lg:justify-between mx-4 lg:mx-16 p-4 lg:pl-14 rounded-2xl"> 
        <div className="">
          <h3 className="text-primaryBg poppins text-xl w-[170px] lg:text-[2.5rem] lg:w-[457px] lg:h-[162px] font-extrabold lg:font-bold">Grab Up to 5% Off On Selected Shoe</h3>
          <Link href={"#collections"}>
            <div className="lg:ml-12 flex items-center justify-center w-28 py-2 lg:py-0 mt-4 lg:mt-0 lg:w-[136px] lg:h-[49px] bg-btn text-plainWhite text-sm lg:text-base rounded-xl lg:rounded-3xl inter font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-90 duration-300">
              Buy Now
            </div>
          </Link>

        </div>
          <div className="lg:w-[612px] lg:h-[612px] -mt-12 -mr-12 lg:-mr-12"> 
          <img src="/assets/images/black-shoe.png" className="w-full h-full object-cover"/>
          </div>
      </header >

      <section className="flex my-8 lg:m-16 poppins pl-7 text-sm text-[#1D364D] font-medium">
        <div className="flex items-center bg-[#EBEDEC] py-2 px-4 rounded-full">
          <span className="mr-2">Filter</span>
          <span><FaAngleRight /></span>
        </div>
      </section>

      <section id="collections">
        <h1 className="text-center mb-6 lg:mb-16 font-bold text-2xl lg:text-4xl uppercase text-[#231F20] poppins">Browse Our Collections</h1>
        <ProductsList products={productsData} />
      </section>

      <section className="bg-[#D9D9D9] p-3 lg:px-10 lg:py-5 mt-16">
        <div className="flex gap-5 lg:w-7/8 lg:mx-auto items-center justify-around">
          <Image src='/assets/images/profile.png' width={150} height={150} />
          <div className="lg:w-3/5 openSans">
            <div className="text-[#717171] italic text-xs lg:text-xl font-normal">
              I recently purchased a pair of sneakers from SoleMart, and I couldn't be happier with my experience. The website was easy to navigate, and I found exactly what I was looking for within minutes.
            </div>
            <div className="openSans text-sm lg:text-2xl font-semibold text-[#0469AD] mt-5">Joshua Kim</div>
          </div>
        </div>

      </section>
    </div >
  );
}
