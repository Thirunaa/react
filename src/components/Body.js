import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import data from "../util/mockData";

// Not using key <<< using array index as key <<<<<<<<<<<< unique key for each child in your list
const Body = () => {
  //let dataList = data;
  // Use state hook
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    console.log("UseEffect called!");
    fetchData();
  }, []);

  // Fetch data from server
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log(data);
  };

  console.log("After useEffect in order");

  return (
    <div>
      <div className="res-filter">
        <button
          className="filter-button"
          onClick={() => {
            let dataListChanged = dataList.filter((res) => res.info.avgRating > 4.4);
            setDataList(dataListChanged);
          }}
        >
          Top restaurants
        </button>
      </div>
      <div className="res-container">
        {dataList.map((res) => (
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
    </div>
  );
};

console.log(<Body />);
export default Body;
