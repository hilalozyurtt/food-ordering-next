import Title from '@/components/ui/Title'
import Image from 'next/image'
import React from 'react'

const Index = () => {
  return (
    <div className="flex h-screen items-center gap-20 py-20 flex-wrap">
        <div className="relative md:flex-1  w-[80%] h-[80%] mx-20">
            <Image src="/images/f1.png" alt="" layout="fill" objectFit="contain"/>
        </div>
        <div className='md:flex-1 py-20 md:text-start text-center'>
            <Title addClass="text-6xl">Good Pizza</Title>
            <span className="text-primary text-2xl font-bold underline underline-offset-1
            my-4 inline-block">$10</span>
            <p className="text-sm my-4 md:pr-24">There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected humour, 
            or randomised words which  look even slightly believable. If you are going to 
            use a passage of Lorem Ipsum, you need to be sure there is not anything 
            embarrassing hidden in the middle of text.
            </p>
            <div>
                <h4 className="text-xl font-bold my-6">Choose the size</h4>
                <div className="flex gap-x-20 md:justify-start justify-center">
                    <div className="relative w-8 h-8">
                        <Image src="/images/size.png" alt="" layout="fill"/>
                        <span className="absolute top-0 -right-6 text-sm bg-primary rounded-full
                         px-[5px] font-medium">Small</span>
                    </div>
                    <div className="relative w-12 h-12">
                        <Image src="/images/size.png" alt="" layout="fill"/>
                        <span className="absolute top-0 -right-8 text-sm bg-primary rounded-full
                         px-[5px] font-medium">Medium</span>
                    </div>
                    <div className="relative w-16 h-16">
                        <Image src="/images/size.png" alt="" layout="fill"/>
                        <span className="absolute top-0 -right-4 text-sm bg-primary rounded-full
                         px-[5px] font-medium">Large</span>
                    </div>
                </div>
                <h4 className="text-xl font-bold my-4">Choose additional ingredient</h4>
                <div className="flex gap-x-4 my-4 md:justify-start justify-center">
                    <label className="flex items-center gap-x-1">
                        <input type="checkbox" className="w-5 h-5 accent-primary"></input>
                        <span className="text-sm font-semibold">Ketçap</span>
                    </label>
                    <label className="flex items-center gap-x-1">
                        <input type="checkbox" className="w-5 h-5 accent-primary"></input>
                        <span className="text-sm font-semibold">Mayonez</span>
                    </label>
                </div>
                <button className="btn-primary">Add to Card</button>
            </div>
        </div>
    </div>
  )
}

export default Index