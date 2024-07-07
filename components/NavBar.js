"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { CiSearch } from "react-icons/ci";
import { GrCart } from "react-icons/gr";


const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="container flex items-center justify-between my-8">
      <Link className="flex items-center gap-2" href="/">
        <Image
          src="/assets/images/logo.png"
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
          <GrCart className="h-6 w-6"/>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar