import React from "react";
import { imagePrefix } from "../util/constants";

function TopRestaurantCard({ image, name, rating, time, cuisines, location }) {
  return (
    <div>
      <div className="top-restaurant-card">
        <img src={imagePrefix + image} alt={name} />
        <h3>{name}</h3>
        <div className="rating">{rating} stars</div>
        <div className="delivery-time">Delivery in {time} minutes</div>
        <div className="cuisine">
          {cuisines.map((cuisine) => (
            <span key={cuisine}>{cuisine}, </span>
          ))}
        </div>
        <div className="location">{location}</div>
      </div>
    </div>
  );
}

export default TopRestaurantCard;
