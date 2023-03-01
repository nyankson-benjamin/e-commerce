import React from "react";
import useCart from "./useCart";
import { Grid } from "@mui/material";
import CartCard from "./CartCard";

function Cart() {
  const [data, isLoading] = useCart();
  return (
    <div
      style={{
        margin: "auto",
      }}
    >
      <h4 style={{ textAlign: "center" }}>My Cart</h4>

      <Grid container spacing={3} sx={{ margin: "auto" }}>
        {data &&
          data.map((cart) => (
            <Grid
              item
              key={cart.id}
              xs={12}
              md={6}
              lg={4}
              sx={{ margin: "auto" }}
            >
              {/* <ProductCard product={product} isLoading={isLoading} /> */}
              <CartCard cart={cart} isLoading={isLoading} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Cart;
