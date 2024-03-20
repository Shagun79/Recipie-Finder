import React from "react";

export const MealItem = ({data}) => {
  return (
    <>
      {!data
        ? ("No data found")
        : (data.map((item) => {
            return (
              <div className="card">
                <img src={item.strMealThumb} alt="pasta" />
                <h3>{item.strMeal}</h3>
              </div>
            );
          }))
          }
    </>
  );
};
