import React from "react";

function RecepiesList({ meals }) {
  return (
    <div className="recepies-list">
      {meals.map((meal, index) => {
        return (
          <div className="recepie" key={index}>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default RecepiesList;
