import React, { useContext } from "react";
import MealsContext from "../contexts/MealsContext";
import { HalfMalf } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";
import Error from "./Error";
import getData from "../API calls/getData";
import useGetData from "../API calls/useGetData";

function Categories() {
  const { setMeals, setError, setIsLoading } = useContext(MealsContext);
  const CategoriesListURL = `https://www.themealdb.com/api/json/v1/1/list.php?c=list`;

  const { meal: categories, error, isLoading } = useGetData(CategoriesListURL);

  const getMeals = (query) => {
    const MealsByCatURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`;
    setIsLoading(true);
    getData(MealsByCatURL)
      .then((data) => {
        setMeals(data);
      })
      .catch((error) => {
        setError({
          isError: true,
          msg: error.message,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <HalfMalf
        text={"Loading..."}
        bgColor={"#ddaaaa1a"}
        center={true}
        width={"130px"}
        height={"130px"}
      />
    );
  }

  if (error.isError) {
    return <Error error={error.msg} />;
  }

  return (
    <div className="categories">
      {categories.map((category, index) => {
        return (
          <div
            className="category"
            key={index}
            onClick={() => getMeals(category.strCategory)}
          >
            <h3>{category.strCategory}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
