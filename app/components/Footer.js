import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa6"
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-footerBg w-full md:px-4 py-12 text-plainWhite grid place-items-center inter text-xs">
      <div className="md:p-2 gap-12 md:gap-0 flex w-11/12 md:w-4/5 items-start justify-between md:justify-between">
        <div className="text-[#F5F7FA] text-[6px] sm:text-sm">
          <div>
            <span>Copyright © 2024 Sole Mart Nig.</span>
            <span className="block">All rights reserved</span>
          </div>
          <div className="flex mt-2 md:mt-5 text-[11px] md:text-sm gap-1 md:gap-5">
            <span className="bg-[#3C474d] w-5 h-5 md:w-8 md:h-8 flex items-center justify-center rounded-full"><FaInstagram /></span>
            <span className="bg-[#3C474d] w-5 h-5 md:w-8 md:h-8 flex items-center justify-center rounded-full"><FaDribbble /></span>
            <span className="bg-[#3C474d] w-5 h-5 md:w-8 md:h-8 flex items-center justify-center rounded-full"><FaTwitter /></span>
            <span className="bg-[#3C474d] w-5 h-5 md:w-8 md:h-8 flex items-center justify-center rounded-full"><FaYoutube /></span>
          </div>
        </div>

          <div>
            <h3 className="text-[9px] md:text-base text-center md:text-start font-semibold mb-2 md:mb-5">Stay up to date</h3>
            <div className="flex items-center gap-8 md:pr-5">
              <label class="relative block">
                <input class="placeholder:text-[#D9DBE1] poppins block bg-[#515A61] w-[163px] md:w-60 h-[23px] md:h-8 rounded-md pl-2 text-[10px]" placeholder="Your email address" type="text" name="email" />
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