import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, deleteItem } from "../../Redux/CartSlice";
import { Link } from "react-router-dom"; // ✅ import Link
import remove_icon from "../Assest/cart_cross_icon.png";

function CartItems() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.new_price * item.quantity,
    0
  );

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "SAVE10") {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div className="w-[90%] md:w-[80%] m-auto mt-10">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        // 🛍 Empty Cart Section
        <div className="text-center mt-16">
          <p className="text-gray-500 text-lg mb-4">Your cart is empty.</p>
          <Link
            to="/"
            className="inline-block bg-[#ff4141] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e63c3c] transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="hidden md:grid grid-cols-8 font-semibold text-gray-700 text-center mb-2 border-b pb-2">
            <p>Product</p>
            <p>Title</p>
            <p>Size</p>
            <p>Color</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>

          {/* Items */}
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-8 items-center text-center my-4 gap-4 border-b pb-4"
            >
              {/* Product Image */}
              <div className="flex md:block items-center gap-2">
                <img
                  src={item.selectedImage || item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover m-auto rounded-md"
                />
                <p className="md:hidden">{item.name}</p>
              </div>

              {/* Product Title */}
              <p className="hidden md:block">{item.name}</p>

              {/* Size */}
              <p>{item.selectedSize || "—"}</p>

              {/* Color */}
              <div className="flex justify-center">
                <img
                  src={item.selectedImage}
                  alt="variant"
                  className="w-10 h-10 object-cover rounded border"
                />
              </div>

              {/* Price */}
              <p>${item.new_price}</p>

              {/* Quantity */}
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() =>
                    dispatch(
                      removeFromCart({
                        productId: item.id,
                        selectedImage: item.selectedImage,
                        selectedSize: item.selectedSize,
                      })
                    )
                  }
                  className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                >
                  −
                </button>
                <span className="px-3 py-1 bg-gray-100 rounded">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        product: item,
                        selectedImage: item.selectedImage,
                        selectedSize: item.selectedSize,
                      })
                    )
                  }
                  className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>

              {/* Total */}
              <p>${(item.new_price * item.quantity).toFixed(2)}</p>

              {/* Remove */}
              <img
                src={remove_icon}
                alt="remove"
                className="w-6 h-6 m-auto cursor-pointer"
                onClick={() =>
                  dispatch(
                    deleteItem({
                      productId: item.id,
                      selectedImage: item.selectedImage,
                      selectedSize: item.selectedSize,
                    })
                  )
                }
              />
            </div>
          ))}

          {/* Summary */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-lg text-gray-700">
                Subtotal:{" "}
                <span className="font-semibold">
                  ${(subtotal - discount).toFixed(2)}
                </span>
              </p>
              {discount > 0 && (
                <p className="text-sm text-blue-600">
                  Promo Applied: -${discount.toFixed(2)}
                </p>
              )}
              <p className="text-sm text-green-600">
                You qualify for free shipping!
              </p>
              <button className="bg-[#ff4141] text-white px-6 py-3 rounded hover:bg-[#e63c3c] mt-2 cursor-pointer">
                Proceed to Checkout
              </button>
            </div>

            {/* Promo */}
            <div className="flex flex-col gap-2 w-full md:w-1/3">
              <h2 className="text-lg font-semibold">Apply Promo Code</h2>
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="bg-[#ff4141] text-white py-2 rounded hover:bg-[#e63c3c] mt-2 cursor-pointer"
                onClick={handleApplyPromo}
              >
                Apply
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItems;
