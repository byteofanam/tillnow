import {constants} from "../utils/constants";
import {baseURL} from "../utils/constants";
const FoodCard=({name, imageId, cuisines, area})=>{
  return(
    <div className="foodCard">
      <img src={baseURL + imageId} alt="Food Image"/>
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{area}</p>
    </div>
  );
};
export default FoodCard;