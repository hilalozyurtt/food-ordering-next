import React from 'react'
import Title from '../ui/Title'
import { MenuItem } from './MenuItem'

export const MenuWrapper = () => {
  return (
    <div className="container mx-auto mb-16">
        <div className="flex flex-col items-center">
            <Title addClass="text-[40px]">Our Menu</Title>
            <div className="mt-10">
                <button className="px-6 py-2 rounded-full bg-secondary text-white">All</button>
                <button className="px-6 py-2 rounded-full">Burger</button>
                <button className="px-6 py-2 rounded-full">Pizza</button>
                <button className="px-6 py-2 rounded-full">Pasta</button>
                <button className="px-6 py-2 rounded-full">Fries</button>
            </div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/> 
            <MenuItem/>
            <MenuItem/>
        </div>
    </div>
  )
}
