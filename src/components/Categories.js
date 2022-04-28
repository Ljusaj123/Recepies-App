import React, { useEffect, useState } from "react";
import getMealCategories from "../API calls/getMealCategories";
import getMealsByCategory from "../API calls/getMealsByCategory";

function Categories({ meals, setMeals }) {
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
            <h3>{category.strCategory}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
