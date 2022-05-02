import React, { useState, useEffect, useContext } from "react";
import MealsContext from "../contexts/MealsContext";
import { HalfMalf } from "react-spinner-animated";
import Error from "./Error";
import getData from "../API calls/getData";

function Categories() {
  const { setMeals, setErrorMeals } = useContext(MealsContext);
  const CategoriesListURL = `https://www.themealdb.com/api/json/v1/1/list.php?c=list`;

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [errorCat, setErrorCat] = useState(null);

  useEffect(() => {
    setIsloading(true);
    getData(CategoriesListURL)
      .then((data) => {
        setCategories(data);
        setIsloading(false);
        setErrorCat(null);
      })
      .catch((error) => {
        setErrorCat(error.message);
        setIsloading(false);
      });
  }, [CategoriesListURL]);

  const getMeals = (query) => {
    const MealsByCatURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`;
    setIsloading(true);
    getData(MealsByCatURL)
      .then((data) => {
        setMeals(data);
        setErrorMeals(null);
      })
      .catch((error) => {
        setErrorMeals(error.message);
      })
      .finally(() => {
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
