import React, { useState } from "react";
import Categories from "./Categories";
import RecepiesList from "./RecepiesList";
import MealsContext from "../contexts/MealsContext";

function Explore() {
  const [meals, setMeals] = useState([]);

  return (
    <section className="explore" id="explore">
      <div className="explore-container">
        <h1>Select Category:</h1>
        <MealsContext.Provider
          value={{
            meals,
            setMeals,
          }}
        >
          <Categories />
          <RecepiesList />
        </MealsContext.Provider>
      </div>
    </section>
  );
}

export default Explore;
