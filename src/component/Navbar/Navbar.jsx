import React, { useState } from "react";
import logo from "../Assest/logo.png";
import cart_icon from "../Assest/cart_icon.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-around items-center px-4 py-3 shadow-md bg-white ">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-[45px] sm:w-[50px]" />
          <h3 className="font-semibold uppercase text-[#171717] text-xl sm:text-2xl">
            shopper
          </h3>
        </div>

        {/* Hamburger Icon (mobile only) */}
        <div className="md:hidden flex items-center mr-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes size={24} className="text-[#171717]" />
            ) : (
              <FaBars size={24} className="text-[#171717]" />
            )}
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`${
            isMenuOpen
              ? "flex flex-col absolute top-16 left-0 w-full bg-white shadow-md py-4 md:hidden"
              : "hidden"
          } md:flex md:static md:flex-row items-center gap-10 lg:gap-[50px] text-[#626262] text-base sm:text-lg font-medium`}
        >
          <li
            className="flex flex-col justify-center items-center gap-2 cursor-pointer"
            onClick={() => {
              setMenu("shop");
              setIsMenuOpen(false);
            }}
          >
            <Link to={"/"}>Shop</Link>
            {menu === "shop" && (
              <hr className="border-none w-[80%] h-[3px] rounded-lg bg-[#FF4141]" />
            )}
          </li>
          <li
            className="flex flex-col justify-center items-center gap-2 cursor-pointer"
            onClick={() => {
              setMenu("mens");
              setIsMenuOpen(false);
            }}
          >
            <Link to={"/mens"}>Mens</Link>
            {menu === "mens" && (
              <hr className="border-none w-[80%] h-[3px] rounded-lg bg-[#FF4141]" />
            )}
          </li>
          <li
            className="flex flex-col justify-center items-center gap-2 cursor-pointer"
            onClick={() => {
              setMenu("womens");
              setIsMenuOpen(false);
            }}
          >
            <Link to={"/womens"}>Womens</Link>
            {menu === "womens" && (
              <hr className="border-none w-[80%] h-[3px] rounded-lg bg-[#FF4141]" />
            )}
          </li>
          <li
            className="flex flex-col justify-center items-center gap-2 cursor-pointer"
            onClick={() => {
              setMenu("kids");
              setIsMenuOpen(false);
            }}
          >
            <Link to={"/kids"}>Kids</Link>
            {menu === "kids" && (
              <hr className="border-none w-[80%] h-[3px] rounded-lg bg-[#FF4141]" />
            )}
          </li>
        </ul>

        {/* Right Side (Login + Cart) */}
        <div className="flex items-center gap-4 sm:gap-[25px] md:gap-[35px]">
          <Link to={"/login"}>
            <button className="w-[90px] sm:w-[110px] h-[35px] sm:h-10 border border-[#7a7a7a] rounded-3xl text-[#515151] font-medium text-sm sm:text-base bg-white cursor-pointer hover:bg-gray-100 hover:text-black transition">
              Login
            </button>
          </Link>

          <div className="relative">
            <Link to={"/cart"}>
              <img
                src={cart_icon}
                alt="cart"
                className="w-7 sm:w-[30px] h-7 sm:h-[30px]"
              />
            </Link>
            <div className="absolute -top-2 -right-3 w-[18px] h-[18px] sm:w-5 sm:h-5 flex justify-center items-center rounded-full text-[10px] sm:text-sm bg-red-600 text-white">
              0
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
