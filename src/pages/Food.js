import React, { useState, useEffect } from "react";

function Food() {
  const [mealsCategories, setMealsCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  const getMealByCategory = (query) => {
    console.log(query);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`)
      .then((data) => data.json())
      .then((data) => {
        setMeals(data.meals);
      });
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
      .then((data) => data.json())
      .then((data) => {
        setMealsCategories(data.meals);
      });
  }, []);

  return (
    <section className="recepie-section">
      <h1>Select category:</h1>
      <div className="recepie-categories">
        {mealsCategories.map((meal, index) => {
          return (
            <div
              className="category"
              onClick={() => getMealByCategory(meal.strCategory)}
              key={index}
            >
              <h2>{meal.strCategory}</h2>
            </div>
          );
        })}
      </div>
      <div className="recepie-by-category">
        {meals.map((m, index) => {
          return (
            <div className="recepie" key={index}>
              <h3>{m.strMeal}</h3>
              <img src={m.strMealThumb} alt="" />
            </div>
          );
        })}
        {console.log(meals)}
      </div>
    </section>
  );
}

export default Food;
