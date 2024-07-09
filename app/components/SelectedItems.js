"use client"

import Image from 'next/image';
import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { RiDeleteBinFill } from 'react-icons/ri';
import { TbCurrencyNaira } from "react-icons/tb";

const SelectedItems = ({ width, padding, items, removeFromCart, updateQuantity }) => {
  return (
    <>
    <div className={`hidden md:flex flex-col h-auto ${padding ? 'px-5' : 'px-2'} pt-2 pb-2 border border-[#d6d4d4] rounded-3xl`} style={
      { width: width, }
      }>
      {items && items.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <p className="openSans font-semibold text-xl p-5 text-[#111111b3]">Oops! It seems you haven't added any items to your cart</p>
        </div>
      ) : (
        items.map((product, index) => (
          <div key={index} className={`h-[150px] flex items-center justify-between ${padding ? 'mr-10' : 'mr-2'} py-2 ${index !== items.length - 1 ? 'border-b' : ''} border-[#d6d4d4]`}>
            <div className='flex items-center gap-5'>
              <div className='w-[124px] h-[124px]'>
                <img src={product.image} className='rounded-lg w-full h-full object-cover' alt={product.name} />
              </div>
              <div className='flex flex-col gap-5'>
                <p className='openSans font-semibold text-xl'>{product.name}</p>
                <p className='openSans font-light text-sm'><span className='font-normal'>Color:</span> <span className='text-[#646261]'>{product.color}</span></p>
                <p className='text-md flex items-center inter font-bold'>
                      <TbCurrencyNaira className='text-2xl' />{product.price}
                    </p>
              </div>
            </div>

            <div className='flex flex-col items-center h-full justify-between'>
              <div className='flex items-center text-2xl gap-1'>
                <button><FaRegBookmark className='bg-plainWhite p-1' /></button>
                <button onClick={() => removeFromCart(product.id)}><RiDeleteBinFill className='text-[#FF3333]' /></button>
              </div>
              <div className='flex gap-5 bg-[#F0F0F0] py-3 px-6 rounded-full'>
                <button className='text-xl' onClick={() => updateQuantity(product.id, product.quantity - 1)}><FiMinus /></button>
                <p className='italic font-bold text-sm'>{product.quantity}</p>
                <button className='text-xl' onClick={() => updateQuantity(product.id, product.quantity + 1)}><FiPlus /></button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>


    <div className={`w-11/12 flex md:hidden flex-col h-auto px-5 pb-2 border border-[#d6d4d4] rounded-3xl`}>
      {items && items.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <p className="openSans font-semibold text-base p-5 text-[#111111b3]">Oops! Seems you haven't added any items to your cart</p>
        </div>
      ) : (
        items.map((product, index) => (
          <div key={index} className={`h-[150px] flex items-center justify-between gap-6 py-2 ${index !== items.length - 1 ? 'border-b' : ''} border-[#d6d4d4]`}>
            <div className='flex items-center gap-5'>
              <div className='w-[100px] h-[100px]'>
                <img src={product.image} className='rounded-lg w-full h-full object-cover' alt={product.name} />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='openSans font-semibold text-xs'>{product.name}</p>
                <p className='openSans font-light text-xs'><span className='font-normal'>Color:</span> <span className='text-[#646261]'>{product.color}</span></p>
                <p className='text-xs flex items-center inter font-bold'>
                      <TbCurrencyNaira className='text-sm' />{product.price}
                    </p>
              </div>
            </div>

            <div className='flex flex-col items-center h-full justify-around'>
              <div className='flex items-center text-2xl gap-1'>
                <button><FaRegBookmark className='bg-plainWhite p-1' /></button>
                <button onClick={() => removeFromCart(product.id)}><RiDeleteBinFill className='text-[#FF3333]' /></button>
              </div>
              <div className='flex gap-5 bg-[#F0F0F0] py-2 px-2 rounded-full'>
                <button className='text-xs disabled:cursor-not-allowed' onClick={() => updateQuantity(product.id, product.quantity - 1)}disabled={product.quantity === 1}><FiMinus /></button>
                <p className='italic font-bold text-xs'>{product.quantity}</p>
                <button className='text-xs' onClick={() => updateQuantity(product.id, product.quantity + 1)}><FiPlus /></button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default SelectedItems;
