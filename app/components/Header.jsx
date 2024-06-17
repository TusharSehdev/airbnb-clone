"useClient()";

import Image from "next/image";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { IoEarth } from "react-icons/io5";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5">
      {/* Top  */}
      <div className="relative items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          objectFit="contain"
          layout="fill"
          objectPosition="left"
          alt="/"
        />
      </div>
      {/* Middle  */}
      <div>
        <div className="flex justify-center items-center border-2 h-8 rounded-full p-2 mt-1">
          <input
            placeholder="Enter the city"
            className="w-full focus:outline-none text-black "
          />
          <button className="hidden md:inline-flex">
            <IoIosSearch className="text-white rounded-full bg-red-400 w-6 h-6 p-1 " />
          </button>
        </div>
      </div>
      {/* End  */}
      <div className="flex items-center justify-end">
        <div className="flex items-center space-x-2 justify-end px-5">
          <p className="text-gray-500 hidden md:inline-flex"> Become a host</p>
          <IoEarth className="text-gray-500 text-xl" />
        </div>

        <button className="border-2 text-xl px-3 flex h-10 items-center rounded-xl text-gray-500  bg-white rounded-full shadow-md  font-bold hover:shadow-xl active:scale-90 transition duration-200">
          <CgProfile className="mr-2" />
          <RxHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default Header;
