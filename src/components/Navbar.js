import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 w-full bg-red z-50">
      <div className="flex justify-between items-center h-20 max-w-[90%] md:max-w-[75%] mx-auto px-4 text-white bg-red">
        <img
          src="./images/nav-icon.png"
          alt="icon-navbar"
          className="img-nav"
        />
		

        <ul className="hidden lg:flex">
          <li className="px-4">
            <Link
              to="home"
              smooth={true}
			  offset={-200}
              duration={500}
              className="text-2xl cursor-pointer hover:pb-3 hover:border-b-[3px] hover:border-solid hover:border-indigo-500"
            >
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="about"
              smooth={true}
              offset={-80}
              duration={500}
              className="text-2xl cursor-pointer hover:pb-3 hover:border-b-[3px] hover:border-solid hover:border-indigo-500"
            >
              About
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="product"
              smooth={true}
              offset={-80}
              duration={500}
              className="text-2xl cursor-pointer hover:pb-3 hover:border-b-[3px] hover:border-solid hover:border-indigo-500"
            >
              Product
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="text-2xl cursor-pointer hover:pb-3 hover:border-b-[3px] hover:border-solid hover:border-indigo-500"
            >
              Contact
            </Link>
            {/* <a href="#kontak">Kontak Kami</a> */}
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
          <li className="p-4 border-b border-gray-600 text-center">
            <Link
              to="home"
              smooth={true}
              offset={-200}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600 text-center">
            <Link to="about" smooth={true} offset={-80} duration={500}>
              About
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600 text-center">
            <Link to="product" smooth={true} offset={-80} duration={500}>
              Product
            </Link>
          </li>
          <li className="p-4 text-center">
            <Link to="contact" smooth={true} offset={-80} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
