import Shimmer from "./Shimmer";
import RestaurantCard, {withHighRatedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Body = () => {


    const [restaurants, setRestaurants] = useState([]);
    const [title, setTitle] = useState("Top Restaurants");
    const [searchtext, setSearchtext] = useState(""); 
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const HighRatedRestaurantCard = withHighRatedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.0688&lng=76.1068&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json(); 
        console.log(json); 
        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setTitle(json?.data?.cards[2]?.card?.card?.title);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }   
    
    if(restaurants.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="flex">
                <div className="m-4 p-4" >
                    <input 
                    type="text" 
                    className="border border-solid border-black" 
                    value={searchtext} 
                    onChange={(e)=> setSearchtext(e.target.value) }
                    />
                    <button className="px-4 py-1 bg-green-100 m-4"
                    onClick={()=>{
                        const searchFilter = restaurants.filter((res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()));

                        setFilteredRestaurants(searchFilter);
                    }} >Search</button>
                </div>
                <div className="m-4 p-4">
                <button className="px-2 py-1 bg-green-100 m-4"
                onClick={()=>{
                    let filerrestaurantList = restaurants.filter(res=> res.info.avgRating >= 4);
                    setFilteredRestaurants(filerrestaurantList);
                    }}
                    >
                    Top rated restaurants
                </button>
                </div>
                
            </div>
            <h1 className="p-4 m-4 text-3xl font-bold" >
                   {title}</h1>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map(restaurant => 
                    <Link key = {restaurant.info.id} 
                    to={"/restaurant/"+restaurant.info.id} 
                    > {
                        restaurant.info.avgRating >= 4 ? 
                        <HighRatedRestaurantCard resData = {restaurant} /> :
                        <RestaurantCard resData = {restaurant}  />
                    }
                    
                    </Link>)

                }
            </div>
        </div>
    )
}

export default Body;