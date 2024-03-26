import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const RecipieInfo = () => {
  const { MealId } = useParams();

  const [item, setItem] = useState();

  useEffect(() => {
    const fetchDetails = async () => {
      if (MealId !== "") {
        const api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`;

        const response = await fetch(api);
        const resJson = await response.json();
        console.log(resJson, "aaya");
        setItem(resJson.meals[0]); //this is array first property which is obj
        console.log(item, "item");
      }
    };

    fetchDetails();
  }, [MealId]); // Only re-run effect if MealId changes

  return (
    <>
      {!item ? (
        "No Data Found"
      ) : (
        <div className="main-content">
          <div className="content">
            <img src={item.strMealThumb} alt="" className="detail-img" />
            <div className="inner-content">
              <h1>{item[MealId]}</h1>
              <h2>{item.strArea} Food </h2>
              <h3> Category:{item.strCategory}</h3>
            </div>
          </div>
          {
            <div className="recipie-details">
              <div className="ingredients">
                <h2>Ingredients</h2>
                <h4>
                  {item.strIngredient1}: {item.strMeasure1}
                </h4>
                <h4>
                  {item.strIngredient2}: {item.strMeasure}
                </h4>
                <h4>
                  {item.strIngredient3}: {item.strMeasure3}
                </h4>
                <h4>
                  {item.strIngredient4}: {item.strMeasure4}
                </h4>
                <h4>
                  {item.strIngredient5}: {item.strMeasure5}
                </h4>
                <h4>
                  {item.strIngredient6}: {item.strMeasure6}
                </h4>
                <h4>
                  {item.strIngredient7}: {item.strMeasure7}
                </h4>
                <h4>
                  {item.strIngredient8}: {item.strMeasure8}
                </h4>
              </div>
              <div className="instructions">
                <h2>Instructions</h2>
                <h4>{item.strInstructions}</h4>
              </div>
            </div>
          }
        </div>
      )}
    </>
  );
};
