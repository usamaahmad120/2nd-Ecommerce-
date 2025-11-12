import React from "react";

function Checkout() {
  return (
    <div className="w-[90%] md:w-[70%] m-auto mt-10 text-center">
      <h1 className="text-3xl font-semibold mb-4">Checkout</h1>
      <p className="text-gray-600 mb-6">
        This is your checkout page. You can add your order summary, address form,
        and payment section here.
      </p>

      <button
        onClick={() => alert("Order Placed Successfully!")}
        className="bg-[#ff4141] text-white px-6 py-3 rounded-lg hover:bg-[#e63b3b] transition"
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
