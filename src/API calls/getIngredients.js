const getIngredients = (meal) => {
  const array = [];

  for (let i = 1; i < 21; i++) {
    if (meal[`strIngredient${i}`]) {
      array.push(meal[`strMeasure${i}`] + " " + meal[`strIngredient${i}`]);
    }
  }

  return array;
};

export default getIngredients;
