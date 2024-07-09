"use client"

import SelectedItems from "@/app/components/SelectedItems";
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa6";
import { FiTag } from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";
import { useCart } from '@/app/context/CartContext';
import ProductsList from "../components/ProductsList";
import productsData from "@/data/products.json"



const page = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const padding = true

  const width = '800px'
  return (
    <div className="mt-10 px-2 lg:px-10 mb-64">
      <div className="flex items-center gap-1 poppins">
        <Link className="text-[#646261]" href="/">Home</Link>
        <span className="text-[#646261]"><FaAngleRight /></span>
        <Link className="font-bold" href="/cart">Cart</Link>
      </div>

      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="poppins font-extrabold mt-10 lg:mt-0 text-2xl lg:text-[2.6rem]">Your Cart</h1>
        <SelectedItems width={width} padding={padding} items={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />


        {cartItems.length > 0 ? (
          <>
            <div className="openSans w-full lg:w-1/2 h-auto mt-10 px-10 pt-5 pb-10 border border-[#d6d4d4] rounded-3xl">
              <h3 className="text-lg lg:text-2xl font-bold">Order Summary</h3>
              <div className="my-6">
                <div className="text-[#646261] flex justify-between text-base lg:text-xl my-4">
                  <span>Subtotal</span>
                  <span className="flex items-center inter font-bold text-[#000] text-base lg:text-xl"><TbCurrencyNaira className="text-lg lg:text-2xl" />24550.00</span>
                </div>
                <div className="text-[#646261] flex justify-between text-base lg:text-xl my-4">
                  <span>Discount (-5%)</span>
                  <span className="flex items-center text-[#FF3333]"><TbCurrencyNaira className="text-lg lg:text-2xl" />1227</span>
                </div>
                <div className="text-[#646261] flex justify-between text-base lg:text-xl my-4">
                  <span>Delivery Fee</span>
                  <span className="flex items-center text-[#000]"><TbCurrencyNaira className="text-lg lg:text-2xl" />1000</span>
                </div>
                <hr className="text-[#d6d4d4]" />
                <div className="flex justify-between text-base lg:text-xl my-4">
                  <span>Total</span>
                  <span className="flex items-center text-[#000] text-lg lg:text-2xl font-bold"><TbCurrencyNaira className="text-xl lg:text-3xl" />24322.5</span>
                </div>
              </div>
              <Link href='/checkout'><button className="bg-[#3A4980] w-full mt-10 py-2 lg:py-5 rounded-full text-plainWhite italic openSans text-sm lg:text-base font-bold">Go to Checkout</button></Link>
            </div>
          </>
        ) : (
          <section className="my-32">
            <h1 className="text-center mb-6 lg:mb-16 font-bold text-2xl lg:text-4xl uppercase text-[#231F20] poppins">Browse Our Collections</h1>
            <ProductsList products={productsData}/>
          </section>
        )}
      </div>
    </div >
  )
}

export default page