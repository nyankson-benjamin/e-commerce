import React, { useEffect, useState } from "react";
import useFetchProducts from "./useFetchProducts";
import { useParams } from "react-router-dom";
import { Rating, Stack } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function ProductPage() {
  const [products] = useFetchProducts();
  const { id } = useParams();
  const product = products?.find((product) => product.id === Number(id));

  const [image, setImage] = useState();
  useEffect(() => {
    if (product) {
      setImage(product.thumbnail);
    }
  }, [product]);
  return (
    <div>
      {product && (
        <div
          style={{ display: "flex", backgroundColor: "white", width: "800px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <div>
              <img
                src={image}
                alt=""
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
              className="smImages"
            >
              <img
                src={product.thumbnail}
                alt=""
                width={100}
                onClick={() => setImage(product.images[0])}
              />
              <img
                src={product.images[1]}
                alt=""
                width={100}
                onClick={() => setImage(product.images[1])}
              />
              <img
                src={product.images[2]}
                alt=""
                width={100}
                onClick={() => setImage(product.images[2])}
              />
            </div>
          </div>
          <div style={{ paddingLeft: "10px", width: "55%" }}>
            <p style={{ color: "#282c34", fontWeight: "bold" }}>
              {product.title}
            </p>

            <p style={{ color: "#282c34", fontWeight: "bold" }}>
              Brand: {product.brand}
            </p>

            <p style={{ color: "#282c34", fontWeight: "bold" }}>
              ${product.price}
            </p>

            <Stack>
              <Rating
                name="half-rating"
                defaultValue={product.rating}
                precision={0.5}
              />
            </Stack>

            <Button
              variant="contained"
              fullWidth
              startIcon={<AddShoppingCart />}
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
