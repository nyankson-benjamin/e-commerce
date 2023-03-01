import React, { useEffect } from "react";
import useCart from "./useCart";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
function Purchase() {
  const { id } = useParams();
  const [data] = useCart();

  const item = data?.find((item) => item.id === Number(id));

  useEffect(() => {
    console.log(item);
  });
  return (
    <div>
      {item && (
        <Card sx={{ maxWidth: 345, m: "20px auto" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                $ {item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
}

export default Purchase;
