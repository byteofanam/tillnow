import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return (
        <div className="header">
            <div className="logo">
                <img src="https://imgs.search.brave.com/prXWV4LMn7lzztJeB5ULKCaXbpRTAEe7mUapjKpC9ps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ib3Vx/cy5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/OS9saXNpYW50aHVz/LTE0MDI0ODZfMTI4/MC04MjN4NTUwLmpw/Zw"></img>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    );
};
const restaurantList = [
  {
    id: "981278",
    name: "Malwa Family Restaurant",
    imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/26/51443e33-cc93-4cd2-bbce-8c8f3c544fd1_981278.JPG",
    area: "Chhindwara City",
    costForTwo: "₹300 for two",
    cuisines: ["Indian"],
    rating: 4.1,
    deliveryTime: 39,
    isOpen: true
  },
  {
    id: "1211230",
    name: "Deshi Nashta Point",
    imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/20/0d0484a5-84e2-4c8c-8b17-c6d66bd4b8fa_1211230.jpg",
    area: "Chhindwara City",
    costForTwo: "₹150 for two",
    cuisines: ["Indian", "Snacks", "Fast Food"],
    rating: 2.9,
    deliveryTime: 547,
    isOpen: false
  },
  {
    id: "945448",
    name: "Yummy Better",
    imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/5c6d3a34-1ac1-44ca-94cf-7e9122459ebc_945448.jpg",
    area: "Chhindwara City",
    costForTwo: "₹200 for two",
    cuisines: ["South Indian", "Fast Food"],
    rating: "--",
    deliveryTime: 49,
    isOpen: false
  },
  {
    id: "151509",
    name: "Dawat Restaurant (Hotel Surya)",
    imageId: "pegljnajfpylaxlni05s",
    area: "Chhindwara Locality",
    costForTwo: "₹200 for two",
    cuisines: ["Chinese", "South Indian"],
    rating: 4.8,
    deliveryTime: 45,
    isOpen: false
  },
  {
    id: "830418",
    name: "Indian Coffee House",
    imageId: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
    area: "Khajri Chowk",
    costForTwo: "₹300 for two",
    cuisines: ["South Indian", "Chinese", "Fast Food", "Beverages"],
    rating: 4.5,
    deliveryTime: 601,
    isOpen: false
  }
];
const baseURL="https://media-assets.swiggy.com/swiggy/image/upload/";
const FoodCard=({name, imageId, cuisines, area})=>{
  return(
    <div className="foodCard">
      <img src={baseURL + imageId} alt="Food Image"/>
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{area}</p>
    </div>
  )
}
const App=()=>{
  return(
    <>
    <Header/>
    <FoodCard name={restaurantList[0].name} imageId={restaurantList[0].imageId} cuisines={restaurantList[0].cuisines} area={restaurantList[0].area}/>
    </>
  ) 
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);