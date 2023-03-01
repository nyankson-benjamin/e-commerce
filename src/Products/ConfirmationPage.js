import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Modal, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ConfirmPage({ open }) {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      if (open === true) {
        navigate("/cart");
      }
    }, 4000);
  });
  return (
    <Modal open={open} sx={{ margin: "100px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "10px",
          maxWidth: "400px",
          border: "5px solid #282c34",
          margin: "0 auto",
          background: "white",
        }}
      >
        <p
          style={{
            background: "#282c34",
            width: "100%",
            textAlign: "center",
            fontSize: "30px",
            color: "white",
          }}
        >
          Add to cart
        </p>
        <div
          style={{
            background: "#282c34",
            borderRadius: "200px",
            margin: "20px",
          }}
        >
          <CheckIcon
            sx={{
              fontSize: "100px",
              color: "white",
              fontWeight: "bold",
            }}
            className="check"
          />
        </div>

        <p
          style={{
            color: "#282c34",
            fontSize: "20px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          Your item has been successfully added to your cart
        </p>
        <br />

        <CircularProgress />
        <p style={{ color: "#282c34" }}>
          You are being redirected to the cart page
        </p>
      </div>
    </Modal>
  );
}

export default ConfirmPage;
