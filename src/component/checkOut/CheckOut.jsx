import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../Redux/CartSlice"; 

function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.new_price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert("✅ Your order has been placed successfully!");

    // 🧹 Empty the cart after successful order
    dispatch(clearCart());

    // ⏳ Redirect to Home after short delay
    setTimeout(() => navigate("/"), 800);
  };

  return (
    <div className="w-[95%] md:w-[85%] m-auto mt-10 mb-16">
      <h1 className="text-3xl font-bold text-center text-[#171717] mb-8">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 🏠 Delivery Info */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md border">
          <h2 className="text-xl font-semibold mb-4 text-[#171717]">
            Delivery Information
          </h2>
          <form
            onSubmit={handlePlaceOrder}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ff4141] outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ff4141] outline-none"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ff4141] outline-none"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ff4141] outline-none"
              required
            />
            <textarea
              placeholder="Full Address"
              rows="3"
              className="border rounded-lg px-4 py-2 sm:col-span-2 focus:ring-2 focus:ring-[#ff4141] outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="sm:col-span-2 w-full bg-[#ff4141] text-white mt-4 py-3 rounded-lg hover:bg-[#e63b3b] transition text-lg font-medium"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* 💳 Order Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-md border">
          <h2 className="text-xl font-semibold mb-4 text-[#171717]">
            Order Summary
          </h2>

          <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto border-b pb-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty.</p>
            ) : (
              cartItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.selectedImage || item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded-md border"
                    />
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.selectedSize && `Size: ${item.selectedSize}`} x
                        {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium">
                    ${(item.new_price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* 🧾 Price Summary */}
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span>
                {shipping === 0 ? (
                  <span className="text-green-600">Free</span>
                ) : (
                  `$${shipping}`
                )}
              </span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
