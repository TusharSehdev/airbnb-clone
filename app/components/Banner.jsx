import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt=""
      />
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
