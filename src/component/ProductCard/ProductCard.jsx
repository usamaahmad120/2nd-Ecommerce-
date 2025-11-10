
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-[#ff4141] font-bold">PKR {product.new_price}</p>
          <p className="text-gray-500 line-through text-sm">
            PKR {product.old_price}
          </p>
        </div>
        <p className="text-sm text-gray-400 mt-1 capitalize">
          {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
