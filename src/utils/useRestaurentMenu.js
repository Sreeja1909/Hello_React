import { useEffect,useState } from "react";
import { MENU_API_URL } from "./constants";
const useRestaurentMenu = (resId) =>{
    const [ResInfo, setResInfo]= useState(null);
    
    useEffect(()=>{
                fetchMenu();
            },[])
           
            const fetchMenu = async()=>{
                const data = await fetch( MENU_API_URL + resId +"&catalog_qa=undefined&submitAction=ENTER");
                const json = await data.json();
                setResInfo(json.data)
            
            };
            return ResInfo;     
};
export default useRestaurentMenu;
