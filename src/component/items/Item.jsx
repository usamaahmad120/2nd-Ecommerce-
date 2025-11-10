import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
  return (
    <div className="w-full max-w-[300px] hover:scale-105 transition-transform duration-200 flex flex-col items-center bg-white rounded-lg shadow-sm p-2">
      <Link 
        to={`/product/${props.id}`} 
        onClick={() => window.scrollTo(0, 0)}
        className="w-full"
      >
        <img 
          src={props.img} 
          alt={props.name} 
          className="w-full h-auto rounded-lg object-cover"
        />
      </Link>
      
      <p className="mt-2 mb-1 text-center font-medium text-gray-700">{props.name}</p>
      <div className="flex gap-3 justify-center items-center">
          <div className="text-[#374151] text-base font-semibold">
              ${props.new_price}
          </div>
          <div className="text-[#8c8c8c] text-sm font-medium line-through">
             ${props.old_price}
          </div>
      </div>
    </div>
  )
}

export default Item
