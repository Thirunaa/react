import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import TopRestaurantCard from "./TopRestaurantCard";
import { Link } from "react-router-dom";
//import data from "../util/mockData";

// Not using key <<< using array index as key <<<<<<<<<<<< unique key for each child in your list
const Body = () => {
  //let dataList = data;
  // Use state hook
  const [dataList, setDataList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [topRestaurantList, setTopRestaurantList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState("");
  const body1Title = "What's on your mind?";
  const body2Title = "Top restaurant chains in ";
  const body3Title = "Restaurants with online food delivery in ";

  // Dependency array
  // 1. No Dependency array - triggers everytime any state variable updates in the component
  // 2. Empty array as Dependency array - triggers once after the component renders
  // 3. Dependency - triggers whenever that dependency updates
  useEffect(() => {
    //console.log("UseEffect called!");
    fetchData();
    //console.log(dataList.length);
  }, []);

  console.log("City Rendered : ", city);
  //console.log("Body Rendered");
  //console.log(dataList);
  //console.log(filteredList);
  // Fetch data from server
  const fetchData = async () => {
    const dataFromApi = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true"
    );

    const dataFromApiJson = await dataFromApi.json();
    console.log(dataFromApiJson);
    setDataList(dataFromApiJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredList(dataFromApiJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setTopRestaurantList(dataFromApiJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setCity(dataFromApiJson?.data?.cards[11]?.card?.card?.citySlug);
  };

  if (dataList.length === 0) {
    return (
      <div>
        <div className="res-filter">
          <button className="filter-button">Top restaurants</button>
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
              let dataListSearched = dataList.filter((res) =>
                res.info.name.toLowerCase().includes(searchTerm.toLowerCase())
              );
              setFilteredList(dataListSearched);
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
              let dataListChanged = dataList.filter((res) => res.info.avgRating > 4.4);
              setFilteredList(dataListChanged);
            }}
          >
            Filter top rated restaurants
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
              let dataListSearched = dataList.filter((res) =>
                res.info.name.toLowerCase().includes(searchTerm.toLowerCase())
              );
              setFilteredList(dataListSearched);
            }}
          >
            Search
          </button>
        </div>

        <div>
          <h2>{body1Title}</h2>
          <div>
            <h1> Cards to be rendered</h1>
          </div>
        </div>

        <div>
          <h2>{body2Title + city}</h2>
          <div className="top-res-container">
            {topRestaurantList.map((res) => (
              <TopRestaurantCard
                key={res.info.id}
                name={res.info.name}
                rating={res.info.avgRating}
                time={res.info.sla.deliveryTime}
                location={res.info.areaName}
                cuisines={res.info.cuisines}
                image={res.info.cloudinaryImageId}
              />
            ))}
          </div>
        </div>

        <h2>{body3Title + city}</h2>
        <div className="res-container">
          {filteredList.map((res) => (
            <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
              <RestaurantCard
                resName={res.info.name}
                rate={res.info.avgRating}
                time={res.info.sla.deliveryTime}
                place={res.info.areaName}
                cusine={res.info.cuisines[0]}
                img={res.info.cloudinaryImageId}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Body;
