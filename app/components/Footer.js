import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa6"
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-footerBg w-full px-4 py-12 text-plainWhite lg:grid lg:place-items-center inter text-xs">
      <div className="p-2 flex flex-col lg:flex-row lg:w-4/5 lg:items-start lg:justify-between">
        <div className="text-[#F5F7FA] text-xs lg:text-sm">
          <div>
            <span>Copyright © 2024 Sole Mart Nig.</span>
            <span className="block">All rights reserved</span>
          </div>
          <div className="flex mt-5 text-base gap-5">
            <span className="bg-[#3C474d] w-8 h-8 flex items-center justify-center rounded-full"><FaInstagram /></span>
            <span className="bg-[#3C474d] w-8 h-8 flex items-center justify-center rounded-full"><FaDribbble /></span>
            <span className="bg-[#3C474d] w-8 h-8 flex items-center justify-center rounded-full"><FaTwitter /></span>
            <span className="bg-[#3C474d] w-8 h-8 flex items-center justify-center rounded-full"><FaYoutube /></span>
          </div>
        </div>

          <div className="mt-10 lg:mt-0">
            <h3 className="text-sm font-semibold mb-5">Stay up to date</h3>
            <div className="flex items-center gap-8 pr-5">
              <label class="relative block">
                <input class="placeholder:text-[#D9DBE1] poppins block bg-[#515A61] w-60 h-8 rounded-md pl-2 text-[10px]" placeholder="Your email address" type="text" name="email" />
                <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                  <FiSend className="h-4 w-4" />
                </span>
              </label>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer