import React from "react";
import hand_icon from "../Assest/hand_icon.png";
import arrow_icon from "../Assest/arrow.png";
import hero_image from "../Assest/hero_image.png";

function Hero() {
  return (
    <div className="h-auto md:h-screen bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] flex flex-col md:flex-row items-center">
      {/* Left side text */}
      <div className="flex-1 flex flex-col justify-center gap-2 px-6 md:pl-[100px] lg:pl-[150px] py-10 md:py-0 leading-tight text-center md:text-left">
        <h2 className="text-[#090909] text-sm sm:text-base font-semibold mb-1">
          NEW ARRIVALS ONLY
        </h2>

        <div className="flex items-center justify-center md:justify-start gap-2">
          <p className="text-[#171717] text-4xl sm:text-5xl font-semibold leading-none">
            New
          </p>
          <img src={hand_icon} alt="hand" className="w-10 sm:w-12" />
        </div>

        <p className="text-[#171717] text-4xl sm:text-5xl font-semibold leading-none">
          Collection
        </p>
        <p className="text-[#171717] text-4xl sm:text-5xl font-semibold leading-none">
          For Everyone
        </p>

        <div className="flex justify-center md:justify-center items-center gap-2 w-[200px] sm:w-[230px] h-[45px] sm:h-[50px] rounded-lg mt-5 bg-[#ff4141] text-white font-medium text-base sm:text-lg cursor-pointer hover:bg-[#e63b3b] transition">
          <span>Latest Collection</span>
          <img src={arrow_icon} alt="arrow" className="w-5" />
        </div>
      </div>

      {/* Right side image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={hero_image}
          alt="hero"
          className="max-w-[280px] sm:max-w-[350px] md:max-w-[400px] object-contain mt-4 md:mt-10"
        />
      </div>
    </div>
  );
}

export default Hero;
