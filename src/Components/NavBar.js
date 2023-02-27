import React from "react";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div
      style={{
        height: "100px",
        background: "white",
        width: "100%",
        top: "100%",
      }}
    >
      <Link to={"/products"} style={{ color: "#282c34", padding: "10px" }}>
        Miles
      </Link>
    </div>
  );
}
