import React from 'react'
import data_products from '../Assest/data'
import Item from '../items/Item'

function Popular() {
  return (
    <div className="my-10 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#171717] mb-4 rounded-2xl">
        Popular in Women
      </h1>
      <hr className="w-24 sm:w-32 mx-auto border-[#ff4141] border-2 rounded-full mb-8" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-3 sm:px-6 justify-items-center"

>
        {data_products.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            img={item.image}
            old_price={item.old_price}
            new_price={item.new_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular
