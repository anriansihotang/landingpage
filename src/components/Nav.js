import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 w-full bg-red z-50">
      <div className="flex justify-between items-center h-20 max-w-[90%] md:max-w-[65%] mx-auto px-4 text-white-light bg-red">
        <img
          src="./images/icon-header.png"
          alt="icon-navbar"
          className="img-nav"
        />

        <ul className="hidden lg:flex">
          <li className="p-4">
            <a href="#home">Home</a>
          </li>
          <li className="p-4">
            <a href="#about">Tentang Kami</a>
          </li>
          <li className="p-4">
            <a href="#produk">Produk</a>
          </li>
          <li className="p-4">
            <a href="#kontak">Kontak Kami</a>
          </li>
        </ul>
        <div onClick={handleNav} className="block lg:hidden">
          {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] h-full border-r border-r-gray-900 bg-red ease-in-out duration-500 z-1"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="text-xl md:text-2xl font-bold text-white-light m-4">
            PT.MITRA ALAT TERNAK
          </h1>
          <li className="p-4 border-b border-gray-600">
            <a href="#home">Home</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#about">Tentang Kami</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#produk">Produk</a>
          </li>
          <li className="p-4">
            <a href="#kontak">Kontak Kami</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
