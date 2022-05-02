import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MealsContext from "../contexts/MealsContext";
import Error from "./Error";
import { HalfMalf } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

function RecepiesList() {
  const { meals, error, isLoading } = useContext(MealsContext);

  if (error.isError) {
    return <Error error={error.msg} />;
  }

  if (isLoading) {
    return (
      <HalfMalf
        text={"Loading..."}
        bgColor={"#ddaaaa1a"}
        center={true}
        width={"130px"}
        height={"130px"}
      />
    );
  }
  return (
    <div className="recepies-list">
      {meals.map((meal, index) => {
        return (
          <Link to={`/meals/${meal.idMeal}`} key={index}>
            <div className="recepie">
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
