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
      {meals.map(({ idMeal, strMeal, strMealThumb }) => {
        return (
          <Link to={`/meals/${idMeal}`} key={idMeal}>
            <div className="recepie">
              <h3>{strMeal}</h3>
              <img src={strMealThumb} alt="" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default RecepiesList;
