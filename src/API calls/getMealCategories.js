const getMealCategories = async () => {
  const call = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
  );
  const result = await call.json();
  if (!call.ok) {
    throw new Error();
  }
  return result.meals;
};

export default getMealCategories;
