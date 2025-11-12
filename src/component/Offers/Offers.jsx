import React from "react";
import { motion } from "framer-motion";
import exclusive_image from "../Assest/exclusive_image.png";

function Offers() {
  // 🔹 Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="w-[90%] md:w-[76%] m-auto my-20 flex flex-col md:flex-row items-center justify-between bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_60%)] rounded-2xl px-6 md:px-10 py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left side text */}
      <div className="flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-[#171717] text-4xl sm:text-5xl md:text-[50px] font-semibold leading-tight">
          Exclusive
        </h1>
        <h1 className="text-[#171717] text-4xl sm:text-5xl md:text-[50px] font-semibold leading-tight">
          Offer for You
        </h1>
        <p className="text-[#171717] text-base sm:text-lg md:text-[18px] font-medium mt-3">
          ONLY ON BEST SELLER PRODUCTS
        </p>

        <motion.button
          className="w-40 sm:w-[190px] h-[45px] sm:h-12 bg-[#ff4141] text-white font-medium text-lg sm:text-xl rounded-full mt-8 cursor-pointer"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Check Now
        </motion.button>
      </div>

      {/* Right side image */}
      <div className="flex justify-center items-center">
        <motion.img
          src={exclusive_image}
          alt="Exclusive Offer"
          className="w-[180px] sm:w-[250px] md:w-[320px] object-contain"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          viewport={{ once: true, amount: 0.2 }}
        />
      </div>
    </motion.div>
  );
}

export default Offers;
