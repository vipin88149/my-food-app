import React from 'react'
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({items}) => {
    // console.log(items);
    
    const dispatch = useDispatch();
  
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

  return (
    <div >
        {items.map((item,i) => 
        <div key={i} className='p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between'>
            <div data-testid="fooditems" className='w-9/12'>
            <div className='py-2 '>
                <span>{item?.card?.info?.name}</span>
                <span> - ₹{item?.card?.info?.price/100}</span>
            </div>
            <p className='text-xs'>{item?.card?.info?.description}</p>
            </div>
       <div className='w-3/12 p-4 '>
           <div className='absolute'>
                <button className= {
                    item?.card?.info?.imageId ?
                    'rounded-lg bg-black text-white shadow-lg m-auto':
                     'text-center'}
                     onClick={()=> handleAddItem(item)}  
                > 
                     - add +
                </button>
            </div>
            {item?.card?.info?.imageId && <img src={CDN_URL + item?.card?.info?.imageId} className='w-full' />}
        
        </div>
        
        
        </div>
        
        
        
    )}

    </div>
  )
}

export default ItemList