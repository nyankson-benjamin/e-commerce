import React, { useEffect, useState } from "react";
import axios from "axios";
export default function useFetchuser() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:8000/Users");
        setData(response?.data);
      } catch (error) {
        console.log(error);
      }

      const res = await axios.get("https://dummyjson.com/products");
      console.log(res);
    };
    fetch();
  }, []);
  return [data];
}
