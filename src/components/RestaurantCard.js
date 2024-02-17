import React from "react";
import { imagePrefix } from "../util/constants";

const RestaurantCard = (props) => {
  const { resName, rate, time, place, cusine, img } = props;
  return (
    <div>
      <div className="res-card">
        <img className="res-logo" src={imagePrefix + img} alt="logo" />
        <div>
          <p>{resName}</p>
          <p>{rate} </p>
          <p>{time}</p>
          <p>{cusine}</p>
          <p>{place}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
