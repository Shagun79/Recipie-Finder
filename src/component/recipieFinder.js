import React, { useEffect, useState } from "react";
import "./main.css";
import { MealItem } from "./mealItem";
import { RecipieIndex } from "./RecipieIndex";

export const Recipiefinder = () => {
  const [item, setItem] = useState();
  const [api, setApi] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [input, setInput] = useState("");

 useEffect(() => {
    const fetchApi = async () => {
      let response = await fetch(api);
      let resJson = await response.json();
      console.log(resJson, "h");
      setItem(resJson.meals);
      console.log(item, "s");
    };
    fetchApi();
   
},[api]);

  const getAlpha = (alpha) => {
    setApi(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
   
  };
  const SearchRecipie = (evt) => {
    if (evt.key == "Enter") {
      setApi(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
     
    }
    console.log(api, "new");
  };
  console.log(input, "inp");

  return (
    <>
      <div className="main">
        <div className="heading">
          <h2> Serach your recipies here! </h2>
          <p>
            "Easily find delicious recipes with our Recipe Finder app, your
            go-to kitchen helper."
          </p>
        </div>

        <div className="search-input">
          <input
            type="text"
            placeholder="Type Food Here!"
            className="searchBar"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyDown={SearchRecipie}
          ></input>
        </div>
        <div className="container">
          <MealItem data={item} />
        </div>
        <div className="indexContainer">
          <RecipieIndex GetAlpha={getAlpha} />
        </div>
      </div>
    </>
  );
};
