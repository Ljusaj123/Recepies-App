const getIngredients = (meal) => {
  const ingredients = [];

  if (meal) {
    for (let i = 1; i < 21; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          meal[`strMeasure${i}`] + " " + meal[`strIngredient${i}`]
        );
      }
    }
    return ingredients;
  }
};

export default getIngredients;
