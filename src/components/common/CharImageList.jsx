import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { updateFavourite } from "../../store/actions/marvel-actions";
import { useDispatch } from "react-redux";

const CharImageList = ({ title, list, isLoading }) => {
  const dispatch = useDispatch();
  const clickToFavorite = (id) => {
    dispatch(updateFavourite(id));
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading && <CircularProgress />}
      </Box>
      <ImageList sx={{ width: 500, height: 450, margin: "auto" }}>
        <ImageListItem
          key="Subheader"
          cols={2}
          style={{
            position: "fixed",
            top: 110,
            textAlign: "center",
            marginLeft: "150px",
          }}
        >
          <ListSubheader component="div">{title}</ListSubheader>
        </ImageListItem>
        {list.length > 0 &&
          list.map((item) => (
            <ImageListItem
              key={item.thumbnail.path + item.id}
              style={{ marginBottom: "10px", marginLeft: "10px" }}
            >
              <Link
                to={`/marvel/characters/details/${item.id}`}
                state={{ id: 1 }}
              >
                <img
                  src={`${item.thumbnail.path}/portrait_incredible.jpg`}
                  srcSet={`${item.thumbnail.path}/portrait_incredible.jpg`}
                  alt={item.name}
                  loading="lazy"
                />
              </Link>
              <ImageListItemBar
                title={item.name}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.name}`}
                    onClick={() => clickToFavorite(item.id)}
                  >
                    <StarIcon
                      style={{
                        fill: item.isFavourite ? "rgb(255, 210, 48)" : "",
                      }}
                    />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
      </ImageList>
    </div>
  );
};

export default CharImageList;
