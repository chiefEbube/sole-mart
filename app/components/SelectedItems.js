import Image from 'next/image'
import React from 'react'
import { FaRegBookmark } from 'react-icons/fa6'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { RiDeleteBinFill } from "react-icons/ri";


const SelectedItems = ({width, padding}) => {
    const data = [
        {
            id: 1,
            productName: 'Chelsea Boot',
            color: 'Black',
            price: '6,050.00',
            image: '/assets/images/cart-black.svg'
        },

        {
            id: 2,
            productName: 'Air Force',
            color: 'Black',
            price: '6,500.00',
            image: '/assets/images/cart-sneakers.svg'
        },

        {
            id: 3,
            productName: 'Leather Shoe',
            color: 'Brown',
            price: '12000.00',
            image: '/assets/images/cart-brown.svg'
        },
    ]

    return (
        <div className={`flex flex-col h-[560px] ${padding ? 'px-10' : 'px-2'} pt-5 pb-10 border border-[#d6d4d4] rounded-3xl`} style={{width: width}}>
            {data.map((product, i) => (
                <div className={`flex items-center justify-between ${padding ? 'mr-10' : 'mr-2'} py-5 ${i !== data.length - 1 ? 'border-b' : ''} border-[#d6d4d4]`}>
                    <div className='flex items-center gap-5'>
                        <div>
                            <Image src={product.image} width={125} height={187} className='rounded-lg'/>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <p className='openSans font-semibold text-xl'>{product.productName}</p>
                            <p className='openSans font-light text-sm'><span className='font-normal'>Color:</span> <span className='text-[#646261]'>{product.color}</span></p>
                            <p className='inter font-bold'>{product.price}</p>
                        </div>
                    </div>
                    
                    <div className='flex flex-col items-center h-full justify-between'>
                        <div className='flex items-center text-2xl gap-1'>
                            <button><FaRegBookmark className='bg-plainWhite p-1'/></button>
                            <button><RiDeleteBinFill className='text-[#FF3333]'/></button>
                        </div>
                        <div className='flex gap-5 bg-[#F0F0F0] py-3 px-6 rounded-full'>
                            <button className='text-xl'><FiMinus/></button>
                            <p className='italic font-bold text-sm'>1</p>
                            <button className='text-xl'><FiPlus/></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SelectedItems