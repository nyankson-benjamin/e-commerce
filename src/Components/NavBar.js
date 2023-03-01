import React from "react";
import { Link } from "react-router-dom";
import useCart from "../Products/useCart";
import CartLength from "../Products/CartLength";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Input from "@mui/material";
import { Search, Send } from "@mui/icons-material";
export default function () {
  const [data] = useCart();
  return (
    <div
      style={{
        height: "100px",
        background: "white",
        width: "100%",
        top: "100%",
        color: "#282c34",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Link to={"/"} style={{ color: "#282c34", padding: "10px" }}>
        Miles
      </Link>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          placeholder="
Search products, brands and categories
"
          sx={{ minWidth: 400, mr: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton onClick={() => alert("searched")}>
                <Send />
              </IconButton>
            ),
          }}
        />
        {/* <Button variant="contained">Search</Button> */}
      </Box>

      <CartLength value={data?.length} />
    </div>
  );
}
