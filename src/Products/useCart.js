import React, { useEffect, useState } from "react";
import { API } from "../Services/api";
function useCart() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const response = await API.get("cart/");
        setIsLoading(false);
        console.log(response);
        setData(response?.data);
      } catch (error) {}
    };
    fetch();
  }, []);
  return [data, isLoading];
}

export default useCart;
