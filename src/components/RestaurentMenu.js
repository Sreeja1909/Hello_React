import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import ResturentCategory from "./ResturentCategory";
import { useState } from "react";
const ResturentMenu = () =>{
    

    const {resId} = useParams();
  
    const ResInfo = useRestaurentMenu(resId);
   
    const [showIndex, setShowIndex] = useState(null)
    
    if (ResInfo === null) {
         return <Shimmer/>
    };

const {name, cuisines, costForTwoMessage} = ResInfo?.cards[2]?.card?.card?.info;

const {itemCards} = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

console.log(itemCards)
const categories =
ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
c.card?.card?.["@type"] === 
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
console.log("categories" ,categories)
   

    return (
        <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg" >
             {cuisines.join(", ")} - {costForTwoMessage}
        </p>
         {categories.map((category, index) =>(
            <ResturentCategory
             key = {category.card?.card.title} 
             data ={category.card?.card}
             showItems={index === showIndex ? true :false}
             setShowIndex={() => setShowIndex(index)}
             />
         ))} 
        </div>
    )
}

export default ResturentMenu;