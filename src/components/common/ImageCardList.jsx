import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { updateFavourite } from "../../store/actions/marvel-actions";
import { useDispatch } from "react-redux";
import ImageCard from "./ImageCard";

const ImageCardList = ({ title, list, isLoading }) => {
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {list.length > 0 &&
          list.map((item) => (
            <ImageCard
              title={item.name}
              key={item.id}
              to={`/marvel/characters/details/${item.id}`}
              imagePath={`${item.thumbnail.path}/portrait_incredible.jpg`}
              favouriteHandler={() => clickToFavorite(item.id)}
              isFavourite={item.isFavourite}
            />
          ))}
      </Box>
    </div>
  );
};

export default ImageCardList;
