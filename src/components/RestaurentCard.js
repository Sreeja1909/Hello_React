import {CND_URL} from "../utils/constants";

const ResturentCard =(props) =>{
       const{resData} = props;
     
const {
       name ="",
       cuisines =[],
       avgRating = "",
       cloudinaryImageId = ""
       } = resData?.info;
const {slaString} = resData?.info?.sla;
       
       return(
       <div data-testid ="resCard" className="m-2 p-2 w-[250px] bg-gray-100 hover:bg-gray-200">
       <img className="rounded-lg"
       alt="res-logo"
      
       src={`${CND_URL}${cloudinaryImageId}`}
       />

              <h3 className="font-bold py-4 text-lg">{name}</h3>
              <h4>{cuisines?.join(", ")}</h4>        {/* cuisines is an array */}
              <h4>{avgRating}</h4>
              <h4>{slaString}</h4>

       </div>
       );
};

export const withPromtotedLabel = (ResturentCard) =>{
       return(props) =>{
              return(
                     <div>
                       <label>Promoted</label>   
                       <ResturentCard {...props}/>  
                     </div>
              )
       }
}

 export default ResturentCard;