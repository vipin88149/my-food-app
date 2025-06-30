import React from 'react'
import { CDN_URL } from '../utils/constants';

const ItemList = ({items}) => {
    console.log(items);
  return (
    <div>
        {items.map((item,i) => 
        <div key={i} className='p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between'>
            <div className='w-9/12'>
            <div className='py-2 '>
                <span>{item?.card?.info?.name}</span>
                <span> - ₹{item?.card?.info?.price/100}</span>
            </div>
            <p className='text-xs'>{item?.card?.info?.description}</p>
            </div>
       <div className='w-3/12 p-4 '>
           <div className='absolute'>
                <button className= {item?.card?.info?.imageId ? 'rounded-lg bg-black text-white shadow-lg m-auto': 'text-center'  }> - add +</button>
            </div>
            {item?.card?.info?.imageId && <img src={CDN_URL + item?.card?.info?.imageId} className='w-full' />}
        
        </div>
        
        
        </div>
        
        
        
    )}

    </div>
  )
}

export default ItemList