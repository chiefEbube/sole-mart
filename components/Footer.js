import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa6"
import { FiSend } from "react-icons/fi";

const Footer = () => {
  const footerItems = [
    {
      name: 'Company',
      items: [
        'About us', 'Blog', 'Contact us', 'Pricing', 'Testiimonials'
      ]
    },
    {
      name: 'Support',
      items: [
        'Help center', 'Terms of service', 'Legal', 'Privacy policy', 'Status'
      ]
    },
  ]
  return (
    <div className="bg-footerBg w-full py-12 text-plainWhite grid place-items-center inter text-xs">
      <div className="flex w-4/5 items-center justify-between">
        <div className="text-[#F5F7FA] text-xs">
          <div>
            <span>Copyright © 2024 Sole Mart Nig.</span>
            <span className="block">All rights reserved</span>
          </div>
          <div className="flex mt-10 text-base gap-5">
            <span className="bg-[#3C474d] w-8 h-8 flex items-center justify-center rounded-full"><FaInstagram /></span>
            <span className="bg-[#3C474d] w-8 h-8 flex items-center justify-center rounded-full"><FaDribbble /></span>
            <span className="bg-[#3C474d] w-8 h-8 flex items-center justify-center rounded-full"><FaTwitter /></span>
            <span className="bg-[#3C474d] w-8 h-8 flex items-center justify-center rounded-full"><FaYoutube /></span>
          </div>
        </div>


        <div className="flex gap-12">
          {footerItems.map((footerItem) => (
            <div>
              <h3 className="text-sm font-semibold mb-5">{footerItem.name}</h3>
              <div className="flex flex-col gap-3 mt-3 text-[#F5F7FA]">
                {footerItem.items.map((item) => (
                  <a href="#">{item}</a>
                ))}
              </div>
            </div>
          ))}

          <div>
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
    </div>
  )
}

export default Footer