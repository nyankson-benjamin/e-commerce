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
function ProductCard({ product }) {
  return (
    <div className="productCard">
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
            {/* <Typography color="textSecondary">{`${product.title} at ${product.title}`}</Typography> */}
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default ProductCard;
