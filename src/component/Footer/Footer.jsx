import React from "react";
import footer_logo from "../Assest/logo_big.png";
import instagram from "../Assest/instagram_icon.png";
import pintester from "../Assest/pintester_icon.png";
import whatsapp_icon from "../Assest/whatsapp_icon.png";

function Footer() {
  return (
    <footer className="bg-[#f8f8f8] flex flex-col items-center justify-center gap-8 py-10 px-4 mt-20">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img src={footer_logo} alt="logo" className="w-[50px]" />
        <p className="text-[#383838] text-3xl sm:text-4xl font-bold">SHOPPER</p>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center text-[#252525] gap-6 sm:gap-10 text-base sm:text-lg font-medium">
        <li className="hover:text-[#ff4141] cursor-pointer">Company</li>
        <li className="hover:text-[#ff4141] cursor-pointer">Products</li>
        <li className="hover:text-[#ff4141] cursor-pointer">Offices</li>
        <li className="hover:text-[#ff4141] cursor-pointer">About</li>
        <li className="hover:text-[#ff4141] cursor-pointer">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-6">
        <img
          src={instagram}
          alt="Instagram"
          className="w-8 h-8 hover:scale-110 transition cursor-pointer"
        />
        <img
          src={pintester}
          alt="Pinterest"
          className="w-8 h-8 hover:scale-110 transition cursor-pointer"
        />
        <img
          src={whatsapp_icon}
          alt="WhatsApp"
          className="w-8 h-8 hover:scale-110 transition cursor-pointer"
        />
      </div>

      {/* Divider + Copyright */}
      <div className="w-full flex flex-col items-center gap-3 mt-6">
        <hr className="w-[80%] border border-[#ddd]" />
        <p className="text-[#1a1a1a] text-sm sm:text-base text-center">
          © 2023 Shopper. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
