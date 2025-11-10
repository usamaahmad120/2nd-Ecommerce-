import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import star_icon from "../Assest/star_icon.png";
import star_dull from "../Assest/star_dull_icon.png";

function ProductDisplay({ product }) {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(product.image || "");
  const [selectedSize, setSelectedSize] = useState("");

  const colorImages = product.colors || [product.image];

  // Update selectedImage if product changes
  useEffect(() => {
    setSelectedImage(product.image || "");
    setSelectedSize("");
  }, [product]);

  return (
    <div className="flex flex-col lg:flex-row gap-10 w-[90%] md:w-[85%] lg:w-[80%] mx-auto my-10">
      {/* LEFT SECTION */}
      <div className="flex flex-col md:flex-row gap-6 items-center lg:w-1/2">
        {/* Small images */}
        <div className="flex md:flex-col gap-3 justify-center">
          {colorImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`variant-${index}`}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 object-cover border-2 rounded-lg cursor-pointer transition ${
                selectedImage === img
                  ? "border-[#ff4141]"
                  : "border-gray-300 hover:border-[#ff4141]"
              }`}
            />
          ))}
        </div>

        {/* Main image */}
        <div className="flex justify-center w-full">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full max-w-[400px] rounded-xl object-cover shadow-md"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col gap-5 lg:w-1/2">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          {product.name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4].map((i) => (
            <img key={i} src={star_icon} alt="star" className="w-5 h-5" />
          ))}
          <img src={star_dull} alt="star dull" className="w-5 h-5" />
          <p className="text-gray-500 ml-2 text-sm">(122 Reviews)</p>
        </div>

        {/* Prices */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-900">
            ${product.new_price}
          </span>
          <span className="text-gray-500 line-through text-lg">
            ${product.old_price}
          </span>
        </div>

        {/* Size Selector */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Select Size</h3>
          <div className="flex gap-3 flex-wrap">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-md text-sm font-medium cursor-pointer transition ${
                  selectedSize === size
                    ? "bg-[#ff4141] text-white border-[#ff4141]"
                    : "text-gray-700 border-gray-300 hover:bg-[#ff4141] hover:text-white"
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() =>
            dispatch(addToCart({ product, selectedImage, selectedSize }))
          }
          disabled={!selectedSize}
          className={`bg-[#ff4141] text-white font-semibold py-3 rounded-lg w-full md:w-[200px] cursor-pointer transition ${
            !selectedSize ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Add to Cart
        </button>

        {/* Category */}
        <div className="text-gray-600 text-sm mt-2">
          <p>
            <span className="font-medium text-gray-800">Category:</span>{" "}
            {product.category}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
