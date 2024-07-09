"use client"

import SelectedItems from "@/app/components/SelectedItems";
import Link from "next/link"
import { FaAngleRight, FaAngleDown, FaCircleCheck } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { useCart } from '@/app/context/CartContext';
import { useState } from "react";



const page = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const width = '575px'
  const padding = false

  const [payment, setPayment] = useState(false);

  const handleClickContinue = (e) => {
    e.preventDefault()
    setPayment(true)
  }

  return (
    <div className="mt-10 px-10 mb-64">
      <div className="flex items-center gap-1 poppins">
        <Link className="text-[#646261]" href="/">Home</Link>
        <span className="text-[#646261]"><FaAngleRight /></span>
        <Link className="text-[#646261]" href="/cart">Cart</Link>
        <span className="text-[#646261]"><FaAngleRight /></span>
        <Link className="font-bold" href="/checkout">Checkout</Link>
      </div>

      <div className="">
        <h1 className="text-center bgpoppins font-extrabold text-[2.6rem]">Checkout</h1>
        <div className="flex justify-around mt-10">
          <div className="mt-10">
            <SelectedItems width={width} padding={padding} items={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
          </div>

          {cartItems.length > 0 ? (
            <>
              <div>
                <div className="mb-5 flex gap-2 items-center text-[#888787] poppins font-semibold text-2xl">
                  <span className="text-[#3A4980]">Details</span>
                  <span className="text-[#c7c5c5]"><GoDash /></span>
                  <span className="text-[#c7c5c5]"><FaCircleCheck /></span>
                  <span className="text-[#c7c5c5]"><GoDash /></span>
                  <span>Delivery</span>
                  <span className="text-[#c7c5c5]"><GoDash /></span>
                  <span className="text-[#c7c5c5]"><FaCircleCheck /></span>
                  <span className="text-[#c7c5c5]"><GoDash /></span>
                  <span>Payment</span>
                </div>

                {payment === false ? (<>
                  <form className="text-[#585858] poppins font-medium max-w-[550px]">
                    <div className="bg-plainWhite p-10">
                      <h3 className="text-xl">Contact Details</h3>

                      <div className="flex gap-5 my-5">
                        <div>
                          <label htmlFor="firstName">First Name</label>
                          <input type="text" id="firstName" className='input' />
                        </div>

                        <div>
                          <label htmlFor="lastName">Last Name</label>
                          <input type="text" id="lastName" className='input' />
                        </div>
                      </div>

                      <div className="my-5">
                        <label htmlFor="email">Email</label>
                        <input type="emai" id="email" className="input" />
                      </div>


                      <div className="my-5">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" className='input' />
                      </div>
                    </div>

                    <div className="bg-plainWhite p-10 mt-10">
                      <h3 className="text-xl">Shipping Details</h3>

                      <div className="my-5">
                        <label htmlFor="flat">Flat/House no.</label>
                        <input type="text" id="flat" className='input' />
                      </div>

                      <div className="my-5">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" className="input" />
                      </div>


                      <div className="flex gap-5 my-5">
                        <div>
                          <label htmlFor="city">City</label>
                          <input type="text" id="city" className='input' />
                        </div>

                        <div>
                          <label htmlFor="state">State</label>
                          <input type="text" id="state" className='input' />
                        </div>
                      </div>

                      <div className="w-1/2 mx-auto">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input type="text" id="postalCode" className='input' />
                      </div>
                    </div>
                    <div className="flex justify-end mt-8">
                      <button type="button" className="bg-[#3A4980] text-plainWhite font-extrabold py-3 px-6 rounded-md" onClick={(e) => handleClickContinue(e)}>Continue</button>
                    </div>
                  </form>

                </>
                ) : (
                  <>
                    <form className="text-[#585858] poppins font-medium max-w-[550px]">
                      <div className="bg-plainWhite p-5">
                        <h3 className="text-xl">Payment Methods</h3>

                        <div>

                        </div>


                        <div className="flex justify-start mt-8">
                          <button type="button" className="border border-[#3A4980] text-[#3A4980] bg-plainWhite py-3 px-6 rounded-md" onClick={(e) => handleClickContinue(e)}>Back</button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </>
          ) : (
            ''
          )}
        </div>

      </div>
    </div>
  )
}

export default page