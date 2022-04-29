const getData = async (url) => {
  const call = await fetch(url);
  const result = await call.json();
  if (!call.ok) {
    throw Error("could not fetch data from that resource");
  }

  return result.meals;
};

export default getData;
