const getData = async (url) => {
  const call = await fetch(url);
  if (!call.ok) {
    throw new Error("Ups! Something went wrong");
  }
  try {
    const result = await call.json();
    const resolved = await Promise.resolve(result);
    const { meals } = resolved;
    return meals;
  } catch (e) {
    throw new Error("Could not fetch data from that resource");
  }
};

export default getData;
