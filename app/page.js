import ProductsList from "@/components/ProductsList";
import Image from "next/image";
import { FaAngleRight, FaChevronDown } from "react-icons/fa6";

export default function Home() {
  const preferences = ['Shoe type', 'Price', 'Size selection', 'Color', 'Material', 'Brand'];
  return (
    <div className="mb-64">
      <header className="bg-greyBg flex items-center justify-between mx-16 pl-14 rounded-2xl">
        <div className="">
          <h3 className="text-primaryBg poppins text-[2.5rem] w-[457px] h-[162px] font-bold">Grab Up to 5% Off On Selected Shoe</h3>
          <button className="ml-12 w-[136px] h-[49px] bg-btn text-plainWhite text-base rounded-3xl inter font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-90 duration-300">Buy Now</button>
        </div>
        <div className="-mt-12 -mr-12">
          <Image src="/assets/images/black-shoe.png" width={612} height={361} />
        </div>
      </header>

      <section className="flex gap-56 mx-16 my-16 poppins pl-7 text-sm text-[#1D364D] font-medium">

        <div className="flex items-center bg-[#EBEDEC] py-2 px-4 rounded-full">
          <span className="mr-2">Filter</span>
          <span><FaAngleRight /></span>
        </div>

        <div className="flex gap-4">
          { preferences.map((preference) => (
            <div className="flex items-center bg-[#EBEDEC] px-4 rounded-full">
            <span className="mr-2">{preference}</span>
            <span><FaChevronDown /></span>
          </div>
          ))}
        </div>
      </section>
      <ProductsList />
    </div>
  );
}
