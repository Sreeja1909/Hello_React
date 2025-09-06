import ResturentCard, {withPromtotedLabel}from "./RestaurentCard";
import { useState ,useContext} from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
const [listOfRestaurents, setListOfResturent]= useState([]);
const [filteredRestaurant, setFilteredRestaurant] = useState([]);
const [searchText, setSearchText] = useState("");
const onlineStatus = useOnlineStatus();   
const RestaurantCardPromoted = withPromtotedLabel(ResturentCard);
    useEffect(()=>{
        
        fetchData();
    },[]);
    
    
    const fetchData = async() =>{
        const data = await 
       fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4777117&lng=78.5107752&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json(); 
       
       console.log(listOfRestaurents)
    const restaurants =
     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
debugger
      console.log(restaurants);
       setListOfResturent(restaurants);
       setFilteredRestaurant(restaurants);
    };
    
    if(onlineStatus === false) return(
     <h1> You are Offline!! Check internet connection</h1>)

    const {loggedInUser,setUserName} = useContext(UserContext);

       return listOfRestaurents?.length === 0 ?(<Shimmer/>):
       (
       <div className = "body">
        <div className="Filter flex  ">
            <div className="search m-3 p-3">
                <input type = "text" className="border border-solid border-black" value={searchText}
                onChange={
                    (e)=>
                    {setSearchText(e.target.value)
                        
                    }}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"  onClick={() => {
             // filter the Restaurant and update the UI
             const filteredRestaurant = listOfRestaurents.filter((res) => {
             return res.info.name.toLowerCase().includes(searchText.toLowerCase());
             });
             setFilteredRestaurant(filteredRestaurant);
                }} >Search
                </button>
            </div>
        
        <div>
        <div className="search m-3 p-3 items-center"> 
        <button className=" px-3 py-3  bg-green-100 m-4 rounded-lg"
        onClick={() =>{
            const filteredList = listOfRestaurents.filter(
                (res)=> res.info.avgRating > 4.3);
                setFilteredRestaurant(filteredList)
            }}
        > Top Rated Resturents 
        </button>
       
        </div>
         <div className="search m-3 p-3 items-center"> 
            <label>UserName:</label>
        <input className="border border-black p-1"
        value={loggedInUser}
         onChange={(e) => setUserName(e.target.value)}></input>
        </div>
        </div>

        

       
       
        </div>
        <div className="flex flex-wrap"> 
         {filteredRestaurant.map((resturent) => (
            <Link 
            key={resturent.info.id} 
            to={"/resturent/" + resturent.info.id}>
                {resturent.info.promoted ? (
                    <RestaurantCardPromoted resData={resturent}/> 

                ) :(
                    <ResturentCard resData={resturent}/> 
                )}
            
               </Link>

       ))}
      
       
        </div>
       </div>
       );
};
export default Body;
