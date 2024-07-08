"use client"

import SelectedItems from "@/app/components/SelectedItems";
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa6";
import { FiTag } from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";
import { useCart } from '../context/CartContext';


const page = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const padding = true

  const width = '800px'
  return (
    <div className="mt-10 px-10 mb-64">
      <div className="flex items-center gap-1 poppins">
        <Link className="text-[#646261]" href="/">Home</Link>
        <span className="text-[#646261]"><FaAngleRight /></span>
        <Link className="font-bold" href="/cart">Cart</Link>
      </div>

      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="poppins font-extrabold text-[2.6rem]">Your Cart</h1>
        <SelectedItems width={width} padding={padding} items={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />


        <div className="openSans w-1/2 h-[533px] mt-10 px-10 pt-5 pb-10 border border-[#d6d4d4] rounded-3xl">
          <h3 className="text-2xl font-bold">Order Summary</h3>
          {cartItems.length > 0 ? (
            <>
          <div className="my-6">
            <div className="text-[#646261] flex justify-between text-xl my-4">
              <span>Subtotal</span>
              <span className="flex items-center inter font-bold text-[#000] text-xl"><TbCurrencyNaira className="text-2xl"/>24550.00</span>
            </div>
            <div className="text-[#646261] flex justify-between text-xl my-4">
              <span>Discount (-5%)</span>
              <span className="flex items-center text-[#FF3333]"><TbCurrencyNaira className="text-2xl"/>1227</span>
            </div>
            <div className="text-[#646261] flex justify-between text-xl my-4">
              <span>Delivery Fee</span>
              <span className="flex items-center text-[#000]"><TbCurrencyNaira className="text-2xl"/>1000</span>
            </div>
            <hr className="text-[#d6d4d4]"/>
            <div className="flex justify-between text-xl my-4">
              <span>Total</span>
              <span className="flex items-center text-[#000] text-2xl font-bold"><TbCurrencyNaira className="text-3xl"/>24322.5</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8 pr-5">
              <label class="relative block">
                <input class="placeholder:text-[#818181] openSans block bg-[#f0f0f0] w-[420px] h-12 rounded-full pl-10 text-base" placeholder="Add promo code" type="text" name="search" />
                <span class="absolute inset-y-0 left-3 flex items-center pr-2">
                  <FiTag className="h-5 w-5 text-[#959494]" />
                </span>
              </label>
            </div>
            <button className="h-12 bg-blackBg text-plainWhite font-bold text-base px-10 rounded-full italic">Apply</button>
          </div>
          <Link href='/cart/checkout'><button className="bg-[#3A4980] w-full mt-10 py-5 rounded-full text-plainWhite italic openSans text-base font-bold">Go to Checkout</button></Link>
          </>
          ) : (
            <p>No items in Cart</p>
          )}
      </div>
    </div>
    </div >
  )
}

export default page