import { useEffect, useState } from "react";

const useGetData = (url) => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    msg: "",
  });
  const [meal, setMeal] = useState([]);

  const fetchData = async (url) => {
    const call = await fetch(url);
    setIsloading(true);
    if (!call.ok) {
      setError({
        isError: true,
        msg: "OOPS something went wrong",
      });
      setIsloading(false);
    }
    try {
      const result = await call.json();
      const { meals } = result;
      setMeal(meals);
      setIsloading(false);
    } catch (e) {
      setError({
        isError: true,
        msg: "Could not fetch data from that resource",
      });
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { meal, error, isLoading };
};

export default useGetData;
