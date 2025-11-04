import React from 'react'

function Item(props) {
  return (
    <div className='w-[300px] hover:transition'>
        <img src={props.img} alt="" />
        <p className='m-1.5'>{props.name}</p>
        <div className='flex gap-5'>
            <div className='text-[#374151] text-base font-semibold'>
                ${props.new_price}
            </div>
            <div className='text-[#8c8c8c] text-sm font-medium line-through'>
               ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item