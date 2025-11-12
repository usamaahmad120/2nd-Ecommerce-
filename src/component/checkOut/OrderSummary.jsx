import React from 'react'
import { useSelector } from 'react-redux'

function OrderSummary() {
  const cartItems = useSelector((state) => state.cart.items)
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Order Summary</h2>
      
      <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-2">
            <span className="font-medium text-gray-700">{item.name}</span>
            <span className="text-gray-600">{item.quantity} × Rs {item.price}</span>
          </div>
        ))}
      </div>

      <div className="border-t mt-4 pt-4 flex justify-between text-lg font-semibold text-gray-800">
        <span>Total</span>
        <span>Rs {total.toLocaleString()}</span>
      </div>
    </div>
  )
}

export default OrderSummary
