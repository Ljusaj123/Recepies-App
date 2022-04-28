import React, { useState } from "react";
import Categories from "./Categories";
import RecepiesList from "./RecepiesList";

function Explore() {
  const [meals, setMeals] = useState([]);

  return (
    <section className="explore" id="explore">
      <div className="explore-container">
        <h1>Select Category:</h1>
        <Categories meals={meals} setMeals={setMeals} />
        <RecepiesList meals={meals} />
      </div>
    </section>
  );
}

export default Explore;
