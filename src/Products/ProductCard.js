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
function ProductCard({ product, isLoading }) {
  return (
    <div className="productCard">
      {isLoading ? (
        <Skeleton />
      ) : (
        <Link to={`/productPage/${product.id}`}>
          <Card
            elevation={1}
            className="productCard"
            sx={{ width: "90%", ml: -0.8 }}
          >
            <img
              src={product.thumbnail}
              alt=""
              style={{ width: "100%", height: "200px" }}
              className="bigImage"
              title={product.title}
            />
            <CardHeader
              title={product.title}
              subheader={`Brand: ${product.brand}`}
            />
            <CardContent>
              <Typography color="textSecondary">{product.title}</Typography>
              <h6>Category: {product.category}</h6>
              <p>
                {" "}
                $
                {(
                  product.price -
                  (product.discountPercentage / 100) * product.price
                ).toFixed(2)}
              </p>
              <p style={{ letterSpacing: 5 }}>
                <s>${product.price}</s>
              </p>
              <Stack>
                <Rating
                  name="half-rating"
                  defaultValue={product.rating}
                  precision={0.5}
                />
              </Stack>
            </CardContent>
          </Card>
        </Link>
      )}
    </div>
  );
}

export default ProductCard;
