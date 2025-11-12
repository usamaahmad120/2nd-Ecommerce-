import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectProductStock } from "../../Redux/CartSlice";
import { selectReviewsByProduct } from "../../Redux/reviewSlice";
import star_icon from "../Assest/star_icon.png";
import star_dull from "../Assest/star_dull_icon.png";

function ProductDisplay({ product }) {
  const dispatch = useDispatch();
  const stock = useSelector((state) => selectProductStock(state, product.id));

  const [selectedImage, setSelectedImage] = useState(product.image || "");
  const [selectedSize, setSelectedSize] = useState("");

  const colorImages = product.colors || [product.image];

  // Redux slice reviews
  const reviewsFromStore = useSelector((state) =>
    selectReviewsByProduct(state, product.id)
  );

  // Merge JSON reviews + slice reviews
  const reviews = [...(product.reviews || []), ...reviewsFromStore];

  useEffect(() => {
    setSelectedImage(product.image || "");
    setSelectedSize("");
  }, [product]);

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  return (
    <div className="flex flex-col lg:flex-row gap-10 w-[90%] md:w-[85%] lg:w-[80%] mx-auto my-10">
      {/* LEFT - Images */}
      <div className="flex flex-col md:flex-row gap-6 items-center lg:w-1/2">
        <div className="flex md:flex-col gap-3 justify-center">
          {colorImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`variant-${i}`}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 object-cover border-2 rounded-lg cursor-pointer transition ${
                selectedImage === img
                  ? "border-[#ff4141]"
                  : "border-gray-300 hover:border-[#ff4141]"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-center w-full">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full max-w-[400px] rounded-xl object-cover shadow-md"
          />
        </div>
      </div>

      {/* RIGHT - Product Details */}
      <div className="flex flex-col gap-5 lg:w-1/2">
        <h1 className="text-2xl md:text-3xl font-semibold">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              src={i <= Math.round(averageRating) ? star_icon : star_dull}
              alt="star"
              className="w-5 h-5"
            />
          ))}
          <p className="text-gray-500 ml-2 text-sm">
            ({reviews.length} Review{reviews.length !== 1 ? "s" : ""})
          </p>
        </div>

        {/* Prices */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">${product.new_price}</span>
          {product.old_price && (
            <span className="line-through text-gray-500">${product.old_price}</span>
          )}
        </div>

        {/* Stock */}
        <p className="text-sm text-gray-600">
          {stock > 0 ? `In Stock: ${stock}` : "Out of Stock"}
        </p>

        {/* Size Selector */}
        <div>
          <h3 className="font-semibold mb-2">Select Size</h3>
          <div className="flex gap-3 flex-wrap">
            {product.sizes?.map((size) => (
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
          disabled={stock <= 0}
          className={`bg-[#ff4141] text-white py-3 rounded-lg w-full md:w-[200px] font-semibold transition ${
            stock <= 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
          }`}
        >
          {stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>

        {/* Category */}
        <p className="text-gray-600 mt-2">
          <span className="font-medium">Category:</span> {product.category}
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
