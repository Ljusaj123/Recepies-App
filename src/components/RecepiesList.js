import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MealsContext from "../contexts/MealsContext";

function RecepiesList() {
  const { meals } = useContext(MealsContext);

  return (
    <div className="recepies-list" id="list">
      {meals.map((meal, index) => {
        return (
          <Link to={`/meals/${meal.idMeal}`}>
            <div className="recepie" key={index}>
              <h3>{meal.strMeal}</h3>
              <img src={meal.strMealThumb} alt="" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default RecepiesList;
