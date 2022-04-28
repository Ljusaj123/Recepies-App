import React, { useState } from "react";
import Categories from "../components/Categories";
import RecepiesList from "../components/RecepiesList";
import MealsContext from "../contexts/MealsContext";
import Footer from "../components/Footer";

function Recepies() {
  const [meals, setMeals] = useState([]);

  return (
    <section className="recepies">
      <div className="recepies-container">
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
        <Footer />
      </div>
    </section>
  );
}

export default Recepies;
