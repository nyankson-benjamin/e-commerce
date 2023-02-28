import axios from "axios";
import React, { useEffect, useState } from "react";

export default function () {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://dummyjson.com/products");
        setIsLoading(false);
        setProducts(response?.data?.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetch();
  }, []);
  return [products, isLoading];
}
