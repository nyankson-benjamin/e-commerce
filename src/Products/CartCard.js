import React from "react";
import {
  CardHeader,
  Card,
  CardContent,
  Typography,
  Stack,
  Rating,
} from "@mui/material";
import { Link } from "react-router-dom";

import Skeleton from "../Components/Skeleton";
function CartCard({ cart, isLoading }) {
  return (
    <div className="productCard">
      {isLoading ? (
        <Skeleton />
      ) : (
        <Link to={`/purchase/${cart.id}`}>
          <Card
            elevation={1}
            className="productCard"
            sx={{ width: "90%", ml: 0.8 }}
          >
            <img
              src={cart.image}
              alt=""
              style={{ width: "100%", height: "200px" }}
              className="bigImage"
              title={cart.title}
            />
            <CardHeader title={cart.title} subheader={`Brand: ${cart.brand}`} />
            <CardContent>
              <Typography color="textSecondary">{cart.title}</Typography>
              <p>Quantity: {cart.quantity}</p>
              <p> Unit price: ${cart.unitPrice}</p>
              <p> Total: ${cart.price}</p>
            </CardContent>
          </Card>
        </Link>
      )}
    </div>
  );
}

export default CartCard;
