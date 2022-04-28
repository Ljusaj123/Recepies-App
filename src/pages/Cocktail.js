import React, { useState, useEffect } from "react";

function Cocktail() {
  const [cocktailsCategories, setCocktailsCategories] = useState([]);
  const [cocktails, setCocktails] = useState([]);

  const getCocktailByCategory = (query) => {
    console.log(query);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${query}`)
      .then((data) => data.json())
      .then((data) => {
        setCocktails(data.drinks);
      });
  };

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
      .then((data) => data.json())
      .then((data) => {
        setCocktailsCategories(data.drinks);
      });
  }, []);
  return (
    <section className="recepie-section">
      <h1>Select category:</h1>
      <div className="recepie-categories">
        {cocktailsCategories.map((meal, index) => {
          return (
            <div
              className="category"
              onClick={() => getCocktailByCategory(meal.strCategory)}
              key={index}
            >
              <h2>
                <a href="#recepie-by-category">{meal.strCategory}</a>
              </h2>
            </div>
          );
        })}
      </div>
      <div className="recepie-by-category" id="recepie-by-category">
        {cocktails.map((c, index) => {
          return (
            <div className="recepie" key={index}>
              <h3>{c.strDrink}</h3>
              <img src={c.strDrinkThumb} alt="" />
            </div>
          );
        })}
        {console.log(cocktails)}
      </div>
    </section>
  );
}

export default Cocktail;
