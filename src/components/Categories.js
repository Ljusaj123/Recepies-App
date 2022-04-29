import React, { useEffect, useState, useContext } from "react";
import getMealCategories from "../API calls/getMealCategories";
import getMealsByCategory from "../API calls/getMealsByCategory";
import MealsContext from "../contexts/MealsContext";
import { HalfMalf } from "react-spinner-animated";
import Error from "./Error";

function Categories() {
  const { setMeals, setErrorMeals } = useContext(MealsContext);

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [errorCat, setErrorCat] = useState(null);

  useEffect(() => {
    setIsloading(true);
    getMealCategories()
      .then((data) => {
        setCategories(data);
        setIsloading(false);
        setErrorCat(null);
      })
      .catch((error) => {
        setErrorCat(error.message);
        setIsloading(false);
      });
  }, []);

  const getMeals = (query) => {
    setIsloading(true);
    getMealsByCategory(query)
      .then((data) => {
        setMeals(data);
        setIsloading(false);
        setErrorMeals(null);
      })
      .catch((error) => {
        setErrorMeals(error.message);
        setIsloading(false);
      });
  };

  return (
    <div className="categories">
      {isLoading && (
        <HalfMalf
          text={"Loading..."}
          bgColor={"#ddaaaa1a"}
          center={true}
          width={"130px"}
          height={"130px"}
        />
      )}
      {errorCat && <Error error={errorCat} />}
      {categories &&
        categories.map((category, index) => {
          return (
            <div
              className="category"
              key={index}
              onClick={() => getMeals(category.strCategory)}
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
