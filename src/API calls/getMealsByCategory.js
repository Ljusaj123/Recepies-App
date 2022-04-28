const getMealsByCategory = async (query) => {
  const call = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`
  );
  const result = await call.json();
  if (!call.ok) {
    throw new Error();
  }

  return result.meals;
};

export default getMealsByCategory;