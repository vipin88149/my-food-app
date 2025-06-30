import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const handleclick = () => {
        setShowIndex();
        
    }
   
  return (
    <div>
        <div className='w-6/12 mx-auto p-4 my-4 bg-gray-300 shadow-xl   '>
        <div className='flex justify-between cursor-pointer' onClick={handleclick}>
            <span className='font-bold text-lg'>{data?.title}</span>
            <span >👀</span>
        </div>
           {showItems && <ItemList items={data?.itemCards} />}
        </div>
        
    
    </div>
  )
}

export default RestaurantCategory