import React from "react";
import arrow_icon from "../Assest/arrow.png";

function Breadcrum({ product }) {
  return (
    <div className="flex items-center gap-2 text-gray-600 text-sm my-4">
      HOME 
      <img src={arrow_icon} alt="" className="w-3 h-3" /> 
      SHOP 
      {product && (
        <>
          <img src={arrow_icon} alt="" className="w-3 h-3" /> 
          {product?.category}
          <img src={arrow_icon} alt="" className="w-3 h-3" /> 
          {product?.name}
        </>
      )}
    </div>
  );
}

export default Breadcrum;
