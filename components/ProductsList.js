"use client"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
// import { Button } from "flowbite-react";
import Image from "next/image"
import { TbCurrencyNaira } from "react-icons/tb";
import { FaRegHeart, FaStar, FaStarHalf } from "react-icons/fa";

import products from "@/data/data"
import GoldStars from './GoldStars';


const ProductsList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
      <div className='mx-16 mt-20 inter py-6'>
        <Slider {...settings}>
          {
            products.map((product) => (
              <div className='bg-whiteBg mt-2 mb-6 pb-5'>
                <div style={{ backgroundColor: product.background }} className='h-[303px]  p-2 relative flex justify-center items-center'>
                  <div className='bg-plainWhite absolute right-2 top-3 w-11 h-11 flex items-center justify-center rounded-full'>
                    <FaRegHeart className='text-[#667085] text-2xl' />
                  </div>
                  <Image width={231} height={244} src={product.image} />
                </div>

                <div className='flex flex-col items-center gap-2 p-4'>
                  <div className='flex items-center w-full justify-between'>
                    <p className='text-[#667085] text-lg font-semibold'>{product.name}</p>
                    <p className='text-lg flex items-center font-semibold'>
                      <TbCurrencyNaira className='text-2xl' />{product.price}
                    </p>
                  </div>

                  <p className='w-full text-[#98A2B3] text-sm'>{product.remaining} types of shoes available</p>
                  <div className='flex items-center w-full justify-start'>
                    <GoldStars numberOfStars={product.stars} />
                    <p className='text-sm'>({product.reviews})</p>
                  </div>

                  <div className='flex items-center w-full justify-between gap-4 mt-3'>
                    <button className="w-32 h-8 bg-secondaryBg text-plainWhite text-sm rounded-3xl inter font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-90 duration-300">Add To Cart</button>
                    <button className="w-32 h-8 bg-plainWhite text-secondaryBg outline outline-1 outline-secondaryBg text-sm rounded-3xl inter font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-90 duration-300">Add Shortlist</button>

                  </div>
                </div>
              </div>

            ))
          }
        </Slider>
      </div>
  )
}

export default ProductsList