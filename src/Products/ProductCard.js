import React from "react";
import {
  CardHeader,
  Card,
  IconButton,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import Skeleton from "../Components/Skeleton";
function ProductCard({ product, isLoading }) {
  return (
    <div className="productCard">
      {isLoading ? (
        <Skeleton />
      ) : (
        <Link to={`/productPage/${product.id}`}>
          <Card elevation={4} className="productCard">
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
              <p>
                <s>${product.price}</s>
              </p>
            </CardContent>
          </Card>
        </Link>
      )}
    </div>
  );
}

export default ProductCard;
