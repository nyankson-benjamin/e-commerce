import axios from "axios";
import React, { useEffect, useState } from "react";

export default function () {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response?.data?.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetch();
  }, []);
  return [products];
}
