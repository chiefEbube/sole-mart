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
    <nav className="container flex items-center justify-between my-8">
      <Link className="flex items-center gap-1" href="/">
        <Image
          src="/assets/images/logo.svg"
          width={80}
          height={78.1}
        />
        <h3 className="poller text-3xl text-primaryBg uppercase">Sole Mart</h3>
      </Link>
      <div className="hidden xl:flex items-center gap-14 poppins text-base">
        <Link className={`relative ${pathname === '/' ? 'active' : ''}`} href="/">Home<span></span></Link>
        <Link className={`relative ${pathname === '/productListing' ? 'active' : ''}`} href="/productListing">Product Listing Page<span></span></Link>
        <Link className={`relative ${pathname === '/collections' ? 'active' : ''}`} href="/collections">Collections<span></span></Link>
        <Link className={`relative`} href="/">Sign Up<span></span></Link>
      </div>
      <div className="flex items-center gap-8 pr-5">
        <label class="relative block">
          <span class="sr-only">Search</span>
          <input class="placeholder:text-slate-40 poppins block bg-[#f5f5f5] w-60 h-8 rounded-xs pl-8 text-xs" placeholder="What are you looking for" type="text" name="search" />
          <span class="absolute inset-y-0 right-0 flex items-center pr-2">
            <CiSearch className="h-6 w-6" />
          </span>
        </label>



        <div>
          <Link href="/cart" className={`${pathname === '/cart' ? 'text-[#FF3333]' : ''}`}>
            <span className="relative">
              <GrCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-600 text-white rounded-full text-xs leading-tight text-center">
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