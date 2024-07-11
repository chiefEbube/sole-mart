"use client"

import { useCart } from '../context/CartContext';
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { CiSearch } from "react-icons/ci";
import { GrCart } from "react-icons/gr";


const NavBar = () => {
  const pathname = usePathname();
  const { cartCount } = useCart();


  return (
    <nav className="lg:container flex items-center justify-between my-4 lg:my-8">
      <Link className="flex items-center gap-1 pl-3 md:pl-0" href="/">
        <Image
          src="/assets/images/logo.svg"
          width={80}
          height={78.1}
          className='hidden md:block'
        />

        <Image
          src="/assets/images/logo.svg"
          width={35}
          height={35}
          className='block md:hidden'
        />
        <h3 className="poller text-[13px] md:text-xl lg:text-3xl text-primaryBg uppercase">Sole Mart</h3>
      </Link>
      <div className="hidden xl:flex items-center gap-14 poppins text-base">
        <Link className={`relative ${pathname === '/' ? 'active' : ''}`} href="/">Product Listing Page<span></span></Link>
        <Link className={`relative ${pathname === '/cart' ? 'active' : ''}`} href="/cart">Cart<span></span></Link>
        <Link className={`relative ${pathname === '/checkout' ? 'active' : ''}`} href="/checkout">Checkout<span></span></Link>
      </div>
      <div className="flex items-center gap-3 md:gap-8 pr-5">
        <label class="relative hidden md:block">
          <span class="sr-only">Search</span>
          <input class="placeholder:text-slate-40 poppins block bg-[#f5f5f5] w-60 h-8 rounded-xs pl-8 text-xs" placeholder="What are you looking for" type="text" name="search" />
          <span class="absolute inset-y-0 right-0 flex items-center pr-2">
            <CiSearch className="h-6 w-6" />
          </span>
        </label>

        <label class="relative md:hidden">
          <span class="sr-only">Search</span>
          <input class="placeholder:text-slate-40 poppins block bg-[#f5f5f5] w-40 h-6 rounded-xs pl-2 text-[10px]" placeholder="What are you looking for" type="text" name="search" />
          <span class="absolute inset-y-0 right-0 flex items-center">
            <CiSearch className="h-6 w-6" />
          </span>
        </label>



        <div>

          <Link href="/cart" className={`${pathname === '/cart' ? 'text-[#FF3333]' : ''}`}>
            <span className="relative">
              <GrCart className="h-5 w-5 sm:h-6 sm:w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 right-0 sm:top-0 sm:right-0 inline-block h-3 w-3 sm:w-4 sm:h-4 bg-redBg text-primaryWhite font-bold rounded-full text-[9px] sm:text-xs text-center">
                  {cartCount}
                </span>
              )}
            </span>
          </Link>
        </div>



      </div>


    </nav>
  )
}

export default NavBar