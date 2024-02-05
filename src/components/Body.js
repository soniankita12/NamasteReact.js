import RestaurantCard from "./ReturantCard";
import { useState } from "react";
const Body = () => {
    // State variable(super powered react variable(by using hooks)) 
const [listOfRestaurants, setlistOfRestaurants] = useState([
  {
    type: "restaurant",
    data: {
      id: "399522",
      name: "KFC",
      cuisines: ["Burgers", "American", "Snacks", "Fast Food"],
      avgRating: 3.6,
      costForTwo: 250,
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      deliveryTime: 26,
    },
  },
  {
    type: "restaurant",
    data: {
      id: "399523",
      name: "North ka chaska",
      cuisines: ["Butter-paneer", "Paratha", " Sweets"],
      avgRating: 4.1,
      costForTwo: 200,
      cloudinaryImageId: "uk9q53wtd2mfdcpjc0r9",
      deliveryTime: 24,
    },
  },
  {
    type: "restaurant",
    data: {
      id: "399524",
      name: "Cake Factory",
      cuisines: ["Cakes", "Cookies", "Pastries"],
      avgRating: 3.8,
      costForTwo: 350,
      cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
      deliveryTime: 30,
    },
  },
  {
    type: "restaurant",
    data: {
      id: "399525",
      name: "Cheesccakes",
      cuisines: ["Cheesccakes", "Cookies", "Sweets"],
      avgRating: 4.5,
      costForTwo: 500,
      cloudinaryImageId: "b318c0b4bc2169550145ace1d6e791a2",
      deliveryTime: 28,
    },
  },
  {
    type: "restaurant",
    data: {
      id: "399526",
      name: "Meghana Foods",
      cuisines: ["Pulao", "Biryani", "Sweets"],
      avgRating: 4.0,
      costForTwo: 300,
      cloudinaryImageId: "nmtymfibyleylblmkxko",
      deliveryTime: 26,
    },
  },
  {
    type: "restaurant",
    data: {
      id: "399527",
      name: "Meghalay Cuisins",
      cuisines: ["Dumplings", "Soups", "Thupka"],
      avgRating: 4.3,
      costForTwo: 200,
      cloudinaryImageId: "b3005e87423dbad4cb324745deabac0e",
      deliveryTime: 23,
    },
  },
  {
    type: "restaurant",
    data: {
      id: "399528",
      name: "Pizza Homes",
      cuisines: ["Pizza", "Bakery", "Sweets"],
      avgRating: 3.9,
      costForTwo: 300,
      cloudinaryImageId: "4f9afba9112485d52b7c706ff07d0b97",
      deliveryTime: 35,
    },
  },
  {
    type: "restaurant",
    data: {
      id: "399529",
      name: "Momo Only",
      cuisines: ["Momo", "Dumpling"],
      avgRating: 4.3,
      costForTwo: 250,
      cloudinaryImageId: "9668a5819fcba35364dcff30d5f5cfbb",
      deliveryTime: 25,
    },
  },
  {
    type: "restaurant",
    data: {
      id: "399520",
      name: "Full Coffee Wave",
      cuisines: ["Tea", "Coffee", "Croissant"],
      avgRating: 4.2,
      costForTwo: 235,
      cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
      deliveryTime: 23,
    },
  },
]);


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setlistOfRestaurants((res) =>
              res.filter((resturant) => resturant.data.avgRating >= 4)
            );
            console.log(listOfRestaurants);
          }}>
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setlistOfRestaurants((res) =>
              res.filter((resturant) => resturant.data.costForTwo <=200)
            );
            console.log(listOfRestaurants);
          }}>
          Affordable meals
        </button>
      </div>

      <div className="restro-card">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
