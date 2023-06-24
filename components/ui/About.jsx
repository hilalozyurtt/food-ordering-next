/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import Title from './Title'

export const About = () => {
  return (
    <div className="bg-secondary py-20">
        <div className="container mx-auto sm:grid flex sm:grid-cols-2 flex-wrap-reverse items-center">
            <div className="relative w-[445px] h-[600px]">
                <Image src="/images/about-img.png" alt="" layout="fill"/>
            </div>
            <div className="text-white">
                <Title addClass="text-[40px] font-bold">We Are Feane</Title>
                <p className="text-[16px] mt-4">There are many variations of passages of Lorem Ipsum available,
                 but the majority have suffered alteration in some form, by injected humour,
                  or randomised words which don't look even slightly believable. If you are 
                  going to use a passage of Lorem Ipsum, you need to be sure there isn't 
                  anything embarrassing hidden in the middle of text. All
                </p>
                <button className="btn-primary mt-14"> Read More </button>
            </div>
        </div>
    </div>
  )
}
