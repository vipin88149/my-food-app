import { useEffect, useState } from "react";
import { Menu_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resinfo, setResinfo] = useState(null);
            useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(Menu_API+resId
        );
        const json = await data.json(); 
        setResinfo(json.data);  
         
    };

    return resinfo;
}
export default useRestaurantMenu;