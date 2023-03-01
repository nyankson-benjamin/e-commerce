import React, { useEffect } from "react";
import useFetchProducts from "./useFetchProducts";
import CardSlider from "./CardSlider";
import { Grid, Paper } from "@mui/material";
import ProductCard from "./ProductCard";
function ProductList() {
  const [products, isLoading] = useFetchProducts();

  useEffect(() => {
    console.log(products);
  });
  return (
    <div style={{ margin: "auto" }}>
      <p style={{ textAlign: "center" }}>Avalable products</p>
      <CardSlider cards={products} />
      <Grid container spacing={3} sx={{ margin: "auto" }}>
        {products?.map((product) => (
          <Grid item key={product.id} xs={12} md={6} lg={3}>
            <ProductCard product={product} isLoading={isLoading} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductList;
