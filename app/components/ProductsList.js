"use client"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image"
import { TbCurrencyNaira } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

import GoldStars from './GoldStars';
import Link from 'next/link';


const ProductsList = ({ products }) => {
  const pagination = ['Previous', '1', '2', '3', '4', '5', '6', '7', 'Next']
  return (
    <div>
      <div className='inter flex items-center justify-center gap-5'>
        {
          products.map((product) => (
    <Link href={`/products/${product.id}`}>

            <div className='bg-whiteBg mb-6 pb-5 w-[300px] transition ease-in-out delay-200 hover:scale-110 duration-300 cursor-pointer'>
              <div style={{ backgroundColor: product.background }} className='h-[303px] relative flex justify-center items-center'>
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

                <p className='w-full text-[#98A2B3] text-sm'>{product.remaining} pieces available</p>
                <div className='flex items-center w-full justify-start'>
                  <GoldStars numberOfStars={product.stars} />
                  <p className='text-sm'>({product.reviews})</p>
                </div>

                {/* <div className='flex items-center w-full justify-between gap-4 mt-3'>
                  <button className="w-32 h-8 bg-secondaryBg text-plainWhite text-sm rounded-3xl inter font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-90 duration-300">Add To Cart</button>
                  <button className="w-32 h-8 bg-plainWhite text-secondaryBg outline outline-1 outline-secondaryBg text-sm rounded-3xl inter font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-90 duration-300">Add Shortlist</button>

                </div> */}
              </div>
            </div>
            </Link>

          ))
        }
      </div>

      <div className='flex justify-center gap-4 mt-14'>
        {pagination.map((page, i) => (
          <span className={`poppins text-[#667085] text-sm ${i !== 0 && i !== 8 ? 'font-semibold' : ''} py-2 px-4 border border-[#e3e3e3] ${i == 1 ? 'gradient-background' : 'bg-[#FAF7EF]'}`}>{page}</span>
        ))}
      </div>
    </div>
  )
}

export default ProductsList