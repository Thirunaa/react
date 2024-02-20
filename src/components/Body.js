import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
//import data from "../util/mockData";

// Not using key <<< using array index as key <<<<<<<<<<<< unique key for each child in your list
const Body = () => {
  //let dataList = data;
  // Use state hook
  const [dataList, setDataList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDataList, setSearchDataList] = useState(dataList);

  // Dependency array
  // 1. No Dependency array - triggers everytime any state variable updates in the component
  // 2. Empty array as Dependency array - triggers once after the component renders
  // 3. Dependency - triggers whenever that dependency updates
  useEffect(() => {
    console.log("UseEffect called!");
    fetchData();
    //console.log(dataList.length);
  }, []);

  useEffect(() => {
    setSearchDataList(dataList);
  }, [dataList]);

  console.log("Body Rendered");
  // Fetch data from server
  const fetchData = async () => {
    const dataFromApi = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true"
    );

    const dataFromApiJson = await dataFromApi.json();
    setDataList(dataFromApiJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (dataList.length === 0) {
    return (
      <div>
        <div className="res-filter">
          <button
            className="filter-button"
            onClick={() => {
              let dataListChanged = searchDataList.filter((res) => res.info.avgRating > 4.4);
              setDataList(dataListChanged);
            }}
          >
            Top restaurants
          </button>
        </div>

        <div className="res-search">
          <input
            type="text"
            placeholder="Search for restaurants"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let dataListSearched = searchDataList.filter((res) =>
                res.info.name.toLowerCase().includes(searchTerm.toLowerCase())
              );
              setDataList(dataListSearched);
            }}
          >
            Search
          </button>
        </div>
        <Shimmer />
      </div>
    );
  } else {
    return (
      <div>
        <div className="res-filter">
          <button
            className="filter-button"
            onClick={() => {
              let dataListChanged = searchDataList.filter((res) => res.info.avgRating > 4.4);
              setDataList(dataListChanged);
            }}
          >
            Top restaurants
          </button>
        </div>

        <div className="res-search">
          <input
            type="text"
            placeholder="Search for restaurants"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let dataListSearched = searchDataList.filter((res) =>
                res.info.name.toLowerCase().includes(searchTerm.toLowerCase())
              );
              setDataList(dataListSearched);
            }}
          >
            Search
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
  }
};

export default Body;
