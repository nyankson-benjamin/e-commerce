import React, { useEffect } from "react";
import useFetchProducts from "./useFetchProducts";
import { Link } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import ProductCard from "./ProductCard";
function ProductList() {
  const [products] = useFetchProducts();

  useEffect(() => {
    console.log(products);
  });
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p style={{ textAlign: "center" }}>Avalable products</p>
      <Grid container spacing={3} sx={{ margin: "auto" }}>
        {products?.map((product) => (
          <Grid item key={product.id} xs={12} md={6} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductList;
