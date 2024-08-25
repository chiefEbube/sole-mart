"use client"

import SelectedItems from "@/app/components/SelectedItems";
import Link from "next/link"
import { FaAngleRight, FaAngleDown, FaCircleCheck } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { useCart } from '@/app/context/CartContext';
import { useState } from "react";
import Image from "next/image";



const page = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const width = '575px'
  const padding = false

  const [payment, setPayment] = useState(false);

  const toggleContinue = (e) => {
    e.preventDefault()
    if (payment === true) setPayment(false);
    else setPayment(true)
  }

  return (
    <div className="mt-10 px-6 lg:px-10 mb-64">
      <div className="flex items-center gap-1 poppins">
        <Link className="text-[#646261]" href="/">Home</Link>
        <span className="text-[#646261]"><FaAngleRight /></span>
        <Link className="text-[#646261]" href="/cart">Cart</Link>
        <span className="text-[#646261]"><FaAngleRight /></span>
        <Link className="font-bold" href="/checkout">Checkout</Link>
      </div>

      <div className="">
        <h1 className="text-center poppins font-extrabold mt-10 lg:mt-0  text-2xl lg:text-[2.6rem]">Checkout</h1>
        <div className="flex flex-col lg:flex-row justify-around mt-5 lg:mt-10">
          <div className="mt-10 hidden lg:block">
            <SelectedItems width={width} padding={padding} items={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
          </div>

          {cartItems.length > 0 ? (
            <>
              <div>
                {payment === false ? (<>
                  <div className="hidden mb-5 lg:flex gap-2 items-center text-[#888787] poppins font-semibold text-2xl">
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

                  <form className="text-[#585858] poppins lg:font-medium sm:mx-auto max-w-[550px]">
                    <div className="lg:bg-plainWhite p-4 lg:p-10">
                      <h3 className="sm:text-xl font-medium">Contact Details</h3>

                      <div className="text-xs sm:text-base flex flex-col lg:flex-row gap-5 my-5">
                        <div>
                          <label className="font-medium" htmlFor="firstName">First Name</label>
                          <input type="text" id="firstName" className='input' />
                        </div>

                        <div>
                          <label className="font-medium" htmlFor="lastName">Last Name</label>
                          <input type="text" id="lastName" className='input' />
                        </div>
                      </div>

                      <div className="my-5 text-xs sm:text-base">
                        <label className="font-medium" htmlFor="email">Email</label>
                        <input type="emai" id="email" className="input" />
                      </div>


                      <div className="my-5 text-xs sm:text-base">
                        <label className="font-medium" htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" className='input' />
                      </div>
                    </div>

                    <div className="lg:bg-plainWhite p-4 lg:p-10 mt-10">
                      <h3 className="sm:text-xl font-medium">Shipping Details</h3>

                      <div className="my-5 text-xs sm:text-base">
                        <label className="font-medium" htmlFor="flat">Flat/House no.</label>
                        <input type="text" id="flat" className='input' />
                      </div>

                      <div className="my-5 text-xs sm:text-base">
                        <label className="font-medium" htmlFor="address">Address</label>
                        <input type="text" id="address" className="input" />
                      </div>


                      <div className="flex flex-col lg:flex-row gap-5 text-xs sm:text-base my-5">
                        <div>
                          <label className="font-medium" htmlFor="city">City</label>
                          <input type="text" id="city" className='input' />
                        </div>

                        <div>
                          <label className="font-medium" htmlFor="state">State</label>
                          <input type="text" id="state" className='input' />
                        </div>
                      </div>

                      <div className="lg:w-1/2 lg:mx-auto text-xs sm:text-base">
                        <label className="font-medium" htmlFor="postalCode">Postal Code</label>
                        <input type="text" id="postalCode" className='input' />
                      </div>
                    </div>
                    <div className="lg:flex p-4 lg:p-0 justify-end mt-8 mx-auto">
                      <button className="bg-[#3A4980] text-plainWhite font-extrabold w-full py-2 lg:py-3 lg:px-6 rounded-md" onClick={(e) => toggleContinue(e)}>Continue</button>
                    </div>
                  </form>

                </>
                ) : (
                  <>
                    <div className="hidden mb-5 lg:flex gap-2 items-center text-[#888787] poppins font-semibold text-2xl">
                      <span className="text-[#3A4980]">Details</span>
                      <span className="text-[#3A4980]"><GoDash /></span>
                      <span className="text-[#3A4980]"><FaCircleCheck /></span>
                      <span className="text-[#3A4980]"><GoDash /></span>
                      <span className="text-[#3A4980]">Delivery</span>
                      <span className="text-[#3A4980]"><GoDash /></span>
                      <span className="text-[#3A4980]"><FaCircleCheck /></span>
                      <span className="text-[#3A4980]"><GoDash /></span>
                      <span className="text-[#3A4980]">Payment</span>
                    </div>
                    <form className="text-[#585858] poppins font-medium max-w-[550px] sm:mx-auto">
                      <div className="bg-plainWhite p-5">
                        <h3 className="text-xl font-medium">Payment Methods</h3>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="option my-5">
                              <div className="radio-container">
                                <input id="cash" type="radio" name="payment" className="custom-radio" />
                                <label for="cash" className="radio-label">
                                  <p className="text-[15px] text-[#585858] font-semibold">Pay on Delivery</p>
                                </label>
                              </div>
                              <span className="font-base text-[#585858] text-[10px] lg:text-[13px] ml-10 -mt-5">Pay with cash on delivery</span>
                            </div>

                            <div className="option my-5">
                              <div className="radio-container">
                                <input id="card" type="radio" name="payment" className="custom-radio" />
                                <label for="card" className="radio-label">
                                  <p className="text-[15px] text-[#585858] font-semibold">Debit Cards</p>
                                </label>
                              </div>
                              <span className="font-base text-[#585858] text-[10px] lg:text-[13px] ml-10 -mt-5">Pay with Debit Card</span>
                            </div>


                            <div className="option my-5">
                              <div className="radio-container">
                                <input id="transfer" type="radio" name="payment" className="custom-radio" />
                                <label for="transfer" className="radio-label">
                                  <p className="text-[15px] text-[#585858] font-semibold">Direct Bank Transfer</p>
                                </label>
                              </div>
                              <span className="font-base text-[#585858] text-[10px] lg:text-[13px] ml-10 -mt-5">Pay through your bank</span>
                            </div>
                          </div>

                          <div className="flex gap-2 -mt-8">
                            <span><Image src="/assets/images/visa.png" width={26} height={26} /></span>
                            <span><Image src="/assets/images/american-express.png" width={26} height={26} /></span>
                            <span><Image src="/assets/images/maestro.png" width={26} height={26} /></span>
                          </div>
                        </div>
                      </div>
                    </form>

                    <div className="flex justify-center lg:justify-start mt-8">
                      <button type="button" className="border border-[#3A4980] text-[#3A4980] bg-plainWhite py-3 px-10 rounded-md" onClick={(e) => toggleContinue(e)}>Back</button>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            ''
          )}
        </div>

      </div>
    </div >
  )
}

export default page