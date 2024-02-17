import React from "react";
import RestaurantCard from "./RestaurantCard";
import data from "../util/mockData";

// Not using key <<< using array index as key <<<<<<<<<<<< unique key for each child in your list
const Body = () => {
  return (
    <div className="res-container">
      {data.map((res) => (
        <RestaurantCard
          key={res.info.id}
          resName={res.info.name}
          rate={res.info.avgRating}
          time={res.info.sla.deliveryTime}
          place={res.info.areaName}
          cusine={res.info.cuisines[0]}
          img={res.info.cloudinaryImageId}
        />
      ))}
    </div>
  );
};

export default Body;
