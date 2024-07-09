'use client'
import productsData from "@/data/products.json"
import { notFound } from 'next/navigation';
import ProductsList from "@/app/components/ProductsList";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import GoldStars from "@/app/components/GoldStars";
import { TbCurrencyNaira } from "react-icons/tb";
import { FiMinus, FiPlus } from 'react-icons/fi';


export default function ProductDetailPage({ params }) {
  const { updateQuantity } = useCart();
  const { productId } = params;
  const product = productsData.find((p) => p.id.toString() === productId);
  const { addToCart } = useCart();

  if (!product) {
    return notFound();
  }

  const relatedProducts = productsData.filter((p) => p.id !== product.id);

  return (
    <div className="mb-16">
      <div className="grid sm:items-center grid-cols-1 sm:grid-cols-2 w-11/12 gap-4 mx-auto my-10">
        <div className="w-[300px] h-[300px] sm:h-[400px] lg:w-[514px] lg:h-[521px] mx-auto">
          <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
        </div>

        <div className="flex flex-col justify-evenly lg:h-[514px] mt-4">
          <h1 className="mb-2 font-bold text-3xl lg:text-5xl uppercase text-[#231F20] poppins">{product.name}</h1>
          <GoldStars numberOfStars={product.stars} className={'flex'} />
          <p className="poppins mt-4 mr-8">{product.stars}/5</p>
          <p className="text-xl font-bold text-[#eb2828d4] text-gray-800 flex items-center"><TbCurrencyNaira className="inline text-2xl" />{product.price}</p>
          <p className="poppins text-[#0000007a] my-4 sm:my-2 lg:my-0 text-sm lg:text-base lg:w-3/4">{product.description}</p>
          <section className="flex poppins text-base text-[#526475] gap-5 font-medium">
            <div className="flex items-center bg-[#f1f1f0] py-3 px-4 text-sm lg:text-base rounded-3xl">
              <span>Class</span>
            </div>
            <div className="flex items-center bg-[#f1f1f0] py-2 px-4 text-sm lg:text-base rounded-3xl">
              <span>Comfort</span>
            </div>
          </section>
          <div>
            <button onClick={() => addToCart(product.id)} className="w-full lg:w-10/12 bg-secondaryBg text-plainWhite text-sm rounded-3xl inter font-semibold hover:opacity-90 duration-300 mt-12 sm:mt-8 py-4">Add to Cart
            </button>
          </div>
        </div>
      </div>

      <section className="my-32">
        <h1 className="text-center mb-6 lg:mb-16 font-bold text-2xl lg:text-4xl uppercase text-[#231F20] poppins">You May Also Like</h1>
        <ProductsList products={relatedProducts} />
      </section>
    </div>
  );
}
