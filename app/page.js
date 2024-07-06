import ProductsList from "@/components/ProductsList";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="bg-greyBg flex items-center justify-between mx-[70px] pl-[58px] rounded-[15px]">
        <div className="">
          <h3 className="text-primaryBg poppins text-[42px] w-[457px] h-[162px] font-bold">Grab Up to 5% Off On Selected Shoe</h3>
          <button className="w-[136px] h-[49px] bg-btn text-plainWhite text-[16px] rounded-[29.5px] inter font-semibold">Buy Now</button>
        </div>
        <div className="-mt-12 -mr-12">
          <Image src="/assets/images/black-shoe.png" width={612} height={361}/>
        </div>
      </header>
      <ProductsList />
    </div>
  );
}
