import React from "react";
import { motion } from "framer-motion";

function NewsLatter() {
  // 🔹 Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#e63b3b", transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] m-auto my-20 py-12 px-6 bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_80%)] rounded-3xl flex flex-col items-center text-center gap-6 shadow-md"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <h1 className="text-[#454545] text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
        Get Exclusive Offers on Your Email
      </h1>

      {/* Sub Text */}
      <p className="text-[#454545] text-lg sm:text-xl md:text-2xl font-normal">
        Subscribe to our newsletter and stay updated ✉️
      </p>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-[90%] md:w-[80%] bg-white rounded-[80px] border border-gray-300 shadow-inner overflow-hidden">
        {/* Input */}
        <input
          type="email"
          placeholder="Your Email Address"
          className="w-full sm:w-[70%] px-6 py-3 text-[#616161] text-base outline-none border-none rounded-t-[80px] sm:rounded-t-none sm:rounded-l-[80px]"
        />

        {/* Button */}
        <motion.button
          className="w-full sm:w-[30%] py-3 sm:py-4 bg-[#251f1f] text-white text-lg font-medium rounded-b-[80px] sm:rounded-b-none sm:rounded-r-[80px]"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Subscribe
        </motion.button>
      </div>
    </motion.div>
  );
}

export default NewsLatter;
