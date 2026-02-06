import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FoodCard from "./components/Body.js/FoodCard";
import {restaurantList} from "./components/utils/constants";
const App=()=>{
  return(
    <>
    <Header/>
    <div className="resContainer">
      {restaurantList.map((restaurant) => (
        <FoodCard 
          key={restaurant.id}
          name={restaurant.name}
          imageId={restaurant.imageId}
          cuisines={restaurant.cuisines}
          area={restaurant.area}
        />
      ))}
    </div>
    </>
  ) 
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);