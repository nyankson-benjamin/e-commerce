import React, { useEffect, useState } from "react";
import useFetchProducts from "./useFetchProducts";
import { useParams } from "react-router-dom";
import { Rating, Stack } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import ProductSkeleton from "../Components/Skeleton";
import CartModal from "./CartModal";
export default function ProductPage() {
  const [products, isLoading] = useFetchProducts();
  const { id } = useParams();
  const product = products?.find((product) => product.id === Number(id));
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState();
  useEffect(() => {
    if (product) {
      setImage(product.thumbnail);
    }
  }, [product]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <CartModal
        handleOpen={handleOpen}
        open={open}
        handleClose={handleClose}
        image={image}
      />
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <div>
          {product && (
            <div
              style={{
                display: "flex",
                backgroundColor: "white",
                width: "800px",
              }}
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
                  {`${product.title} || ${product.title}`}
                </p>

                <p style={{ color: "#282c34" }}>Brand: {product.brand}</p>
                <p style={{ color: "#282c34" }}>
                  $
                  {(
                    product.price -
                      ((product.discountPercentage / 100) * product.price)
                  ).toFixed(2)}
                </p>
                <p style={{ color: "#282c34", fontWeight: "bold" }}>
                  <s>${product.price} </s>
                  <span
                    style={{
                      background: "rgba(245, 183, 69,0.2)",
                      padding: "5px",
                      borderRadius: "10px",
                      color: "orange",
                    }}
                  >
                    -{product.discountPercentage}%
                  </span>
                </p>

                <p style={{ color: "#282c34" }}>{product.stock} items left</p>

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
                  onClick={handleOpen}
                >
                  ADD TO CART
                </Button>
                <br />
                <br />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
