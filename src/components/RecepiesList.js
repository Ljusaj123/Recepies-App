import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MealsContext from "../contexts/MealsContext";
import Error from "./Error";

function RecepiesList() {
  const { meals, errorMeals } = useContext(MealsContext);

  return (
    <div className="recepies-list" id="list">
      {errorMeals && <Error error={errorMeals} />}
      {meals &&
        meals.map((meal, index) => {
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
