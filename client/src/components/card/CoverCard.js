import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CoverCard(props) {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 300 }} className="cardComp">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.img}
          alt="album cover image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.artist}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
