import {LOGO_URL} from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
       
       const [reactBtn, setReactBtn] = useState("login");
       const onlineStatus = useOnlineStatus();

       const {loggedInUser} = useContext(UserContext);
       //console.log(loggedInUser);

      //Subcribing the store using selector
       const cartItems = useSelector((store) => store.cart.items);
       console.log(cartItems)
       
       return(
       <div className="flex items-center justify-between px-6 py-3 bg-pink-100 shadow-md">
       
       <div className="logo container">
        <img className="w-20 h-20 object-contain" src={LOGO_URL}
        />      
        </div> 
       <div className="nav-items ">
              <ul className="flex items-center space-x-6 text-gray-800 font-medium">
                <li>Online Status:{onlineStatus ? "🟢": "🔴"} </li>
               
                <li> <Link to = "/home">Home </Link></li>
                <li> <Link to = "/Grocery">Grocery </Link></li>
                <li>
                    <Link to = "/about"> AboutUs </Link>
               </li>
                 <Link to = "/contact"> Contact </Link>
                
                  <li> <Link to = "/Cart">Cart -({cartItems.length} items)</Link></li>
                
                
                <button className="login" 
                onClick={() => 
                { reactBtn === "login" ? setReactBtn("logout"): setReactBtn("login");

                }}>
              {reactBtn}
              </button>
              <li className="px-1" >{loggedInUser} </li>
              </ul>
       </div>    
       </div>
       );
 };
 export default Header;

 