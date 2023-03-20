import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useNavigate} from "react-router-dom";

export default function ImageCard(props) {
  const {title, imagePath, favouriteHandler, isFavourite, to} = props;
  const navigate = useNavigate();

  const handleClick = (to) => {
    navigate(to);
  };

  return (
    <Card sx={{maxWidth: 345, minWidth: 300, margin: 4, boxShadow: 3}}>
      <CardHeader
        sx={{maxWidth: 345, minWidth: 300, cursor: "pointer"}}
        title={title}
        onClick={() => handleClick(to)}
      />
      <CardMedia
        component="img"
        height="194"
        image={imagePath}
        alt="Marvel Image"
        sx={{cursor: "pointer"}}
        onClick={() => handleClick(to)}
      />
      <CardActions
        disableSpacing
        sx={{display: "flex", justifyContent: "flex-end"}}
      >
        <IconButton
          color={isFavourite ? "primary" : "gray"}
          aria-label="add to favorites"
        >
          <FavoriteIcon onClick={favouriteHandler} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
