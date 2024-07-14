"use client"

import { useCart } from '@/app/context/CartContext';
import { notFound } from 'next/navigation';
import GoldStars from '@/app/components/GoldStars';
import { TbCurrencyNaira } from 'react-icons/tb';
import AllProducts from './allProducts';

export default function ProductDetailPage({product}) {
  const { addToCart } = useCart();


  if (!product) {
    return notFound();
  }

  return (
    <div className="mb-16">
      <div className="grid sm:items-center grid-cols-1 sm:grid-cols-2 w-11/12 gap-4 mx-auto my-10">
        <div className="w-[300px] h-[300px] sm:h-[400px] lg:w-[514px] lg:h-[521px] mx-auto">
          <img
            src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
            alt={product?.name}
            className="object-cover h-full w-full"
          />
        </div>

        <div className="flex flex-col justify-evenly lg:h-[514px] mt-4">
          <h1 className="mb-2 font-bold text-3xl lg:text-5xl uppercase text-[#231F20] poppins">{product?.name}</h1>
          {/* Assuming `numberOfStars` and other props are properly passed */}
          <GoldStars numberOfStars={3.5} className="flex" />
          <p className="poppins mt-4 mr-8">{3.5}/5</p>
          <p className="text-xl font-bold text-[#eb2828d4] text-gray-800 flex items-center">
            <TbCurrencyNaira className="inline text-2xl" />
            {product?.current_price}
          </p>
          <p className="poppins text-[#0000007a] my-4 sm:my-2 lg:my-0 text-sm lg:text-base lg:w-3/4">{product?.description}</p>
          <section className="flex poppins text-base text-[#526475] gap-5 font-medium">
            <div className="flex items-center bg-[#f1f1f0] py-3 px-4 text-sm lg:text-base rounded-3xl">
              <span>Class</span>
            </div>
            <div className="flex items-center bg-[#f1f1f0] py-2 px-4 text-sm lg:text-base rounded-3xl">
              <span>Comfort</span>
            </div>
          </section>
          <div>
            <button
              onClick={() => addToCart(product?.id)}
              className="w-full lg:w-10/12 bg-secondaryBg text-plainWhite text-sm rounded-3xl inter font-semibold hover:opacity-90 duration-300 mt-12 sm:mt-8 py-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <AllProducts heading={"YOU MAY ALSO LIKE"}/>
    </div>
  );
}