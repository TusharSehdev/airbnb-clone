import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    {
      src: "https://links.papareact.com/0fm",
      alt: "Image 1",
    },
    {
      src: "https://images.pexels.com/photos/163046/welcome-to-our-home-welcome-tablet-an-array-of-163046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Image 2",
    },
    {
      src: "https://images.pexels.com/photos/1137511/pexels-photo-1137511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Image 3",
    },
  ];

  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]"
          >
            <Image
              src={image.src}
              layout="fill"
              objectFit="cover"
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>
      <div className="absolute top-1/2 w-full text-center font-bold">
        <p>Sure where to go? Perfect</p>
        <button className="text-purple-400 bg-white px-6 py-3 rounded-full shadow-md my-3 font-bold hover:shadow-xl active:scale-90 transition duration-200">
          I&apos;m Flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
