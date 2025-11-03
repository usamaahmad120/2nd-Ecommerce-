import React, { useState } from 'react'
import logo from "../Assest/logo.png"
import cart_icon from "../Assest/cart_icon.png"

function Navbar() {

    const [menu, setMenu] = useState("shop")
  return (
    <>
    <div className='flex justify-around p-2 shadow'>
        <div className='flex justify-center items-center gap-2'>
            <img src={logo} alt="" className='w-[50px]'/>
            <h3 className='font-semibold uppercase text-[#171717] text-2xl'>shopper</h3>
        </div>


       <ul className='flex items-center gap-[50px] text-[#626262] text-lg font-medium
'>
        <li className='flex flex-col justify-center items-center gap-2 cursor-pointer' onClick={()=>{setMenu("shop")}}>Shop {menu==="shop" ? <hr className='border-none w-[80%] h-[3px] rounded-lg bg-[#FF4141]'/>:<></>}</li>
        <li  className='flex flex-col justify-center items-center gap-2 cursor-pointer'onClick={()=>{setMenu("mens")}} >Mens {menu==="mens" ? <hr className='border-none w-[80%] h-[3px] rounded-lg bg-[#FF4141]'/>:<></>}</li>
        <li  className='flex flex-col justify-center items-center gap-2 cursor-pointer'onClick={()=>{setMenu("womens")}} >Womens {menu==="womens" ? <hr className='border-none w-[80%] h-[3px] rounded-lg bg-[#FF4141]'/>:<></>}</li> 
        <li  className='flex flex-col justify-center items-center gap-2 cursor-pointer'onClick={()=>{setMenu("kids")}} >Kids {menu==="kids" ? <hr className='border-none w-[80%] h-[3px] rounded-lg bg-[#FF4141]'/>:<></>}</li>
       </ul>
       <div className='flex items-center gap-[35px]'>
        <button className='w-[110px] h-[40px] border border-[#7a7a7a] rounded-3xl text-[#515151] font-medium text-base bg-white cursor-pointer '>Login</button>
        <img src={cart_icon} alt="" className='w-[30px] h-[30px]' />
        <div className='w-[20px] h-[20px] flex justify-center items-center mt-[-35px] ml-[-50px] rounded-2xl text-sm bg-red-600 text-white'>0</div>
       </div>

       
    </div>
    </>
  )
}

export default Navbar