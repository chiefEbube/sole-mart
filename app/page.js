import ProductsList from "@/components/ProductsList";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="bg-greyBg flex items-center justify-between mx-16 pl-14 rounded-2xl">
        <div className="">
          <h3 className="text-primaryBg poppins text-[2.5rem] w-[457px] h-[162px] font-bold">Grab Up to 5% Off On Selected Shoe</h3>
          <button className="ml-12 w-[136px] h-[49px] bg-btn text-plainWhite text-base rounded-3xl inter font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-90 duration-300">Buy Now</button>
        </div>
        <div className="-mt-12 -mr-12">
          <Image src="/assets/images/black-shoe.png" width={612} height={361}/>
        </div>
      </header>
      <ProductsList />
    </div>
  );
}
