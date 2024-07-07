import SelectedItems from "@/components/SelectedItems";
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa6";


const page = () => {
  return (
    <div className="mt-10 px-10 mb-64">
      <div className="flex items-center gap-1 poppins">
        <Link className="text-[#646261]" href="/">Home</Link>
        <span className="text-[#646261]"><FaAngleRight /></span>
        <Link className="font-bold" href="/cart">Cart</Link>
      </div>

      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="poppins font-extrabold text-[2.6rem]">Your Cart</h1>
        <SelectedItems />



        <div>
          <h3>Order Summary</h3>
          <div>
            <div>
              <span>Subtotal</span>
              <span>24550.00</span>
            </div>
            <div>
              <span>Discount (-5%)</span>
              <span>1227</span>
            </div>
            <div>
              <span>Delivery Fee</span>
              <span>1000</span>
            </div>
            <hr />
            <div>
              <span>Total</span>
              <span>24322.5</span>
            </div>
          </div>

          <div>
            <div>
              <label class="relative block">
                <span class="sr-only">Search</span>
                <input class="placeholder:text-slate-40 poppins block bg-[#f5f5f5] w-60 h-8 rounded-xs pl-8 text-xs" placeholder="What are you looking for" type="text" name="search" />
                <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                  <CiSearch className="h-6 w-6" />
                </span>
              </label>
            </div>
            <button>Apply</button>
          </div>
          <button>Go to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default page