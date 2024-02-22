import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { resURL } from "../util/constants";
const Restaurant = () => {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  console.log(restaurantId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(resURL + restaurantId);
    const response = await fetch(resURL + restaurantId);
    const data = await response.json();
    console.log(data);
    setRestaurant(data?.data?.cards[2]?.card?.card?.info);
  };

  return (
    <div>
      <h1>{restaurant?.name}</h1>
    </div>
  );
};

export default Restaurant;
