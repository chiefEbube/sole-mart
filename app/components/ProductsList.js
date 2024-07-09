"use client"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image"
import { TbCurrencyNaira } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

import GoldStars from './GoldStars';
import Link from 'next/link';
import { useState } from 'react';

const ProductsList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className='inter flex flex-wrap items-center justify-center lg:gap-5'>
        {
          paginatedProducts.map((product) => (
            <Link href={`/products/${product.id}`} className='w-[210px] p-2'>

              <div className='bg-whiteBg mb-6 pb-5 h-auto transition ease-in-out delay-200 hover:scale-110 duration-300 cursor-pointer'>
                <div className='w-[95%] h-[249px] relative flex justify-center items-center mx-auto'>
                  <div className='bg-plainWhite absolute right-2 top-3 w-10 h-10 flex items-center justify-center rounded-full'>
                    <FaRegHeart className='text-[#667085] text-xl' />                                                           
                  </div>
                  <div className='relative w-full h-full'>
                    <Image
                      className='object-cover rounded-t-2xl'
                      src={product.image}
                      alt='Product Image'
                      layout='fill'
                    />
                  </div>
                </div>

                <div className='flex flex-col items-center gap-2 p-4'>
                  <div className='flex items-center w-full justify-between'>
                    <p className='text-[#667085] text-sm lg:text-base font-semibold'>{product.name}</p>
                    <p className='text-md text-sm lg:text-base flex items-center font-semibold'>
                      <TbCurrencyNaira className='text-2xl' />{product.price}
                    </p>
                  </div>

                  <p className='w-full text-[#98A2B3] text-xs lg:text-sm'>{product.remaining} types of shoos available</p>
                  <div className='flex items-center w-full justify-start'>
                    <GoldStars numberOfStars={product.stars} className={'flex items-center'}/>
                    <p className='text-xs lg:text-sm'>({product.reviews})</p>
                  </div>

                  <Link className='w-full mt-3' href={`/products/${product.id}`}>
                    <button className="w-full h-7 lg:h-8 bg-secondaryBg text-plainWhite text-xs lg:text-sm rounded-3xl inter font-semibold hover:opacity-90 duration-300">View Details</button>
                  </Link>
                </div>



              </div>
            </Link>

          ))
        }
      </div>


      <div className='flex justify-center lg:gap-4 lg:mt-14'>
        <button
          className={`transition ease-in-out delay-100 hover:scale-110 duration-300 poppins text-[#667085] text-sm py-1 px-2 lg:py-2 lg:px-4 border border-[#e3e3e3] bg-[#FAF7EF] ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`transition ease-in-out delay-100 hover:scale-110 duration-300 poppins text-[#667085] text-sm font-semibold py-1 px-2 lg:py-2 lg:px-4 border border-[#e3e3e3] ${currentPage === i + 1 ? 'gradient-background' : 'bg-[#FAF7EF]'}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className={`transition ease-in-out delay-100 hover:scale-110 duration-300 poppins text-[#667085] text-sm px-1 py-2 lg:py-2 lg:px-4 border border-[#e3e3e3] bg-[#FAF7EF] ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ProductsList