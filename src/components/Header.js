
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
   
   const [btnName, setBtnName] = useState("Login");
    return (
        <div className="flex justify-between">
            <div className="logo-container">
            <img className="w-48" src = { LOGO_URL} ></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-6"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-6"><Link to="/home">home</Link></li>
                    <li className="px-6"><Link to="/about">About us</Link></li>
                    <li className="px-6"><Link to="/contact">Contact us</Link></li>
                    <li className="px-6">cart</li>
                    <button onClick={()=> {
                    setBtnName(btnName === "Login" ? "Logout" : "Login");
                }} 
                    className="login" 
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;