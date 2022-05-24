import { useParams, Link, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { HalfMalf } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";
import Error from "../components/Error";
import useGetData from "../API calls/useGetData";
import getIngredients from "../API calls/getIngredients";

function SingleMeal() {
  const { id } = useParams();
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const navigate = useNavigate();

  const { meal, error, isLoading } = useGetData(url);

  const ingredients = getIngredients(meal[0]);

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
    return <Error error={error} />;
  }
  return (
    <section className="single-meal">
      <div className="single-meal-container">
        <div className="home-icon-container">
          <button
            className="explore-button"
            onClick={() => navigate("/recepies")}
          >
            Go back
          </button>
          <Link to="/">
            <HiHome />
          </Link>
        </div>
        {meal.map(
          ({
            idMeal,
            strTags,
            strMeal,
            strMealThumb,
            strArea,
            strCategory,
            strInstructions,
            strYoutube,
          }) => {
            return (
              <div className="meal-info-container" key={idMeal}>
                <h1>{strMeal}</h1>
                <div className="tags-container">
                  <h3>Tags:</h3> <p>{strTags ? strTags : "None"}</p>
                  <h3>Area:</h3> <p> {strArea}</p>
                  <h3>Category: </h3> <p>{strCategory}</p>
                </div>
                <div className="picture-ingredient-container">
                  <img src={strMealThumb} alt="" />
                  <div className="ingredients-container">
                    <h2>Ingredients:</h2>
                    {ingredients
                      ? ingredients.map((i, index) => {
                          return <p key={index}>{i}</p>;
                        })
                      : " "}
                  </div>
                </div>
                <div className="instructions">
                  <h3>Instructions:</h3>
                  <p>{strInstructions}</p>
                </div>
                <div className="button-container">
                  {strYoutube ? (
                    <button className="explore-button">
                      <a href={strYoutube}>Link to Youtube</a>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default SingleMeal;
