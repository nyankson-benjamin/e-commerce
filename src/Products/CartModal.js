import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { API } from "../Services/api";
import { useNavigate } from "react-router-dom";
import ConfirmPage from "./ConfirmationPage";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
};

export default function CartModal({
  open,
  handleClose,
  image,
  price,
  title,
  images,
}) {
  const [value, setValue] = useState(1);
  const [currentImg, setCurrentImg] = useState(images[0]);
  const [confirm, setConfirm] = useState(false);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (value < 0) {
      setValue(0);
    } else if (value === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }

    if (open === false) {
      setValue(1);
    }
    // }
  }, [value, open]);

  const cartItems = {
    image: currentImg,
    price: (value * price).toFixed(2),
    title: title,
    quantity: value,
    unitPrice: price,
  };
  const handleAddToCart = async () => {
    try {
      await API.post("cart/", { ...cartItems });
      setConfirm(true);
    } catch (error) {}
  };
  return (
    <div>
      <ConfirmPage open={confirm} />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{
              height: "50px",
              background: "#282c34",
              width: "100%",
              textAlign: "center",
              color: "white",
              // display:'flex'
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Add to cart
          </Typography>
          <br />
          <img
            src={currentImg}
            alt=""
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "10px",
            }}
          />
          <div style={{ display: "flex" }}>
            {images.map((imgs, index) => (
              <img
                src={imgs}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                  margin: "5px",
                }}
                onClick={() => setCurrentImg(imgs)}
                key={index}
                className="smImages"
              />
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <br />
            {title} $ {(price * value).toFixed(2)}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <br />
              <IconButton onClick={() => setValue(value - 1)}>
                <RemoveIcon />
              </IconButton>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: "center",
                      width: "40px",
                      fontSize: "30px",
                      height: "20px",
                    },
                  },
                }}
                value={value}
                type="number"
                onChange={(e) => setValue(e.target.value)}
              />
              <IconButton onClick={() => setValue(value + 1)}>
                <AddIcon />
              </IconButton>
            </div>
            <br />
            <Button
              fullWidth
              variant="contained"
              onClick={handleAddToCart}
              disabled={disable}
            >
              Add
            </Button>
            <br />
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate("/cart")}
            >
              My cart
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
