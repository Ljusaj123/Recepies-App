import React, { useEffect, useState, useContext } from "react";
import getMealCategories from "../API calls/getMealCategories";
import getMealsByCategory from "../API calls/getMealsByCategory";
import MealsContext from "../contexts/MealsContext";

function Categories() {
  const { setMeals } = useContext(MealsContext);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getMealCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="categories">
      {categories.map((category, index) => {
        return (
          <div
            className="category"
            key={index}
            onClick={() =>
              getMealsByCategory(category.strCategory).then((data) =>
                setMeals(data)
              )
            }
          >
            <h3>
              <a href="#list">{category.strCategory}</a>
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
