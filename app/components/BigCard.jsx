import React from "react";
import Image from "next/image";

const BigCard = () => {
  return (
    <>
      <div className="rounded-xl py-10">
        <div className="relative w-full h-[400px]">
          <Image
            src="https://links.papareact.com/4cj"
            layout="fill"
            className="rounded-xl"
            alt=""
          ></Image>
          <div className="absolute top-10 left-10 z-20">
            <h2 className="text-3xl text-semibold">
              Rome Around The Word <br /> With Ease
            </h2>
            <p className="text-xl py-2 text-gray-600">Get Inspired</p>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button className="bg-black p-2 text-white rounded-xl my-3">Check Out More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCard;
