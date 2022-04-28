import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getSingleMeal from "../API calls/getSingleMeal";
import getIngredients from "../API calls/getIngredients";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

function SingleMeal() {
  const { id } = useParams();

  const [meal, setMeal] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getSingleMeal(id).then((data) => setMeal(data[0]));
  }, [id]);

  useEffect(() => {
    setIngredients([...getIngredients(meal)]);
  }, [meal]);

  return (
    <section className="single-meal">
      <div className="single-meal-container">
        <div className="home-icon-container">
          <Link to="/">
            <HiHome />
          </Link>
        </div>
        <h1>{meal.strMeal}</h1>
        <div className="tags-container">
          <h3>Tags:</h3> <p>{meal.strTags ? meal.strTags : "None"}</p>
          <h3>Area:</h3> <p> {meal.strArea}</p>
          <h3>Category: </h3> <p>{meal.strCategory}</p>
        </div>
        <div className="picture-ingredient-container">
          <img src={meal.strMealThumb} alt="" />
          <div className="ingredients-container">
            <h2>Ingredients:</h2>
            {ingredients.map((i, index) => {
              return <p>{i}</p>;
            })}
          </div>
        </div>
        <div className="instructions">
          <h3>Instructions:</h3>
          <p>{meal.strInstructions}</p>
        </div>
      </div>
    </section>
  );
}

export default SingleMeal;
