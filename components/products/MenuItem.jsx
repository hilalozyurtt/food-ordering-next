import Image from 'next/image'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa"

export const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-3xl">
        <div className="w-full bg-[#f1f2f3] h-[210px] grid place-content-center
        rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
            <div className="relative w-36 h-36">
                <Image src="/images/f3.png" alt="" layout="fill" className="hover:scale-110 transition-all"/>
            </div>
        </div>
        <div className="text-white p-[25px]">
            <h4 className="text-xl font-semibold">Delicious Pizza</h4>
            <p className="text-[15px]">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
             magnam voluptatem repellendus sed eaque</p>
             <div className="flex items-center justify-between mt-4">
                <span>$20</span>
                <button className="btn-primary !rounded-full !p-0 !w-10 !h-10 grid place-content-center"><FaShoppingCart/></button>
             </div>
        </div>
    </div>
  )
}
