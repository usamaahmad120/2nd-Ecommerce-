import React from 'react'

function NewsLatter() {
  return (
    <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] m-auto my-20 py-12 px-6 bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_80%)] rounded-3xl flex flex-col items-center text-center gap-6 shadow-md">
      
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
        <button className="w-full sm:w-[30%] py-3 sm:py-4 bg-[#251f1f] text-white text-lg font-medium rounded-b-[80px] sm:rounded-b-none sm:rounded-r-[80px] hover:bg-[#e63b3b] transition-all duration-300">
          Subscribe
        </button>
      </div> 
    </div>
  )
}

export default NewsLatter
