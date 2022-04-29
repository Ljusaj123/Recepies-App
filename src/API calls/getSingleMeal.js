const getSingleMeal = async (query) => {
  const call = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`
  );
  const result = await call.json();
  if (!call.ok) {
    throw Error("could not fetch data from that resource");
  }

  return result.meals;
};

export default getSingleMeal;
