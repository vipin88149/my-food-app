import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestrauntMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

    const {resId} = useParams(); 
    const resinfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    
    if(resinfo === null) {
        return <Shimmer />
    }
  const {name, cuisines, costForTwoMessage,id} = resinfo?.cards[2]?.card?.card?.info;
  const {itemCards} = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
   
   

  return (
    <div className='text-center'>
        <h1>{name} </h1>
        <p> {cuisines.join(", ")} - {costForTwoMessage} </p>
        {categories.map((c,i)=>(
          <div key={i}
          ><RestaurantCategory 
          data={c?.card?.card}
          showItems={showIndex===i ? true : false}  
          setShowIndex= {() => showIndex===i ? setShowIndex(null) : setShowIndex(i)}
          /> 
          </div>
        ))}
    </div>
  )
}

export default RestaurantMenu