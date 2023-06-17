import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appenDots: (dots) => (
        <div>
          <ul className="m-0">{dots}</ul>
        </div>
      ),
      customPaging: (i) => (
        <div className="w-[12px] h-[12px] bg-white rounded-full mt-10"></div>
      ),
  }

  return (
    <div className="h-screen w-full  mx-auto -mt-[88px] ">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image src="/images/hero-bg.jpg" alt="" layout="fill" objectFit="cover" />
        </div>
      </div>
      <Slider {...settings} >
        <div className="m-[46px]">
            <div className="mt-48 text-white flex flex-col items-start gap-y-10">
                <Title addClass="text-6xl">Fast Food Restaurant</Title>
                <p className="text-sm sm:w-2/4 w-full">
                Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
                ad mollitia laborum quam quisquam esse error unde. Tempora ex
                doloremque, labore, sunt repellat dolore, iste magni quos nihil
                ducimus libero ipsam.
                </p>
                <button className="btn-primary w-45">Order Now</button>
            </div>
        </div>
        <div className="m-[46px]">
            <div className="mt-48  text-white flex flex-col items-start gap-y-10">
                <Title addClass="text-6xl">Fast Food Restaurant</Title>
                <p className="text-sm sm:w-2/4 w-full">
                Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
                ad mollitia laborum quam quisquam esse error unde. Tempora ex
                doloremque, labore, sunt repellat dolore, iste magni quos nihil
                ducimus libero ipsam.
                </p>
                <button className="btn-primary w-45">Order Now</button>
            </div>
        </div>
     </Slider>
    </div>
  );
};

export default Carousel;