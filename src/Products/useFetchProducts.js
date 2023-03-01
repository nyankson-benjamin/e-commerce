import axios from "axios";
import React, { useEffect, useState } from "react";
import { dummyURL } from "../constants/url";
import { DUMMy_API } from "../Services/api";
export default function () {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const response = await DUMMy_API.get("products/");
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
