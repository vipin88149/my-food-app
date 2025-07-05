import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    
    const {resData} = props;
   
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = resData?.info
    return (
        <div data-testid="rescard" className="m-4 p-4 w-[250px]" >
            <img className="w-250 h-40 rounded-2xl"
            alt="res-logo"
            src= { CDN_URL+cloudinaryImageId } ></img>
            <h3 className="font-bold py-4 text-lg ">{name} </h3>
            <h4>{cuisines.join(", ")} </h4>
            <h4> {avgRating} stars </h4>
            <h4> {sla?.deliveryTime} mins </h4>
        </div>
    )
}

export const withHighRatedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg " >Rating is greater than 4</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}


export default RestaurantCard;