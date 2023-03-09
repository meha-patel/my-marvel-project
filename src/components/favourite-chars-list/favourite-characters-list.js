import * as React from "react";
import { useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
// import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// import { getMarvelList } from "../../api/marvel-api";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavCharsList = () => {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [favouriteId, setFavouriteId] = useState([]);
  const dispatch = useDispatch();
//   const marvelList = useSelector((state) => state?.marvelList);
  const favIds = useSelector((state) => state?.favourite);

  useEffect(() => {
    // console.log("marvelList:", marvelList);
    console.log("favIds:", favIds);
    //     setIsLoading(true);
    //     getMarvelList().then((resp) => {
    //       setIsLoading(false);
    //     });
  }, [favIds]);

  const removeFromFavorite = (favId) => {
    if (favId) {
      dispatch({ type: "removeFavourite", payload: { favId: favId } });
    }
  };

  //   const updateFavorite = (itemId) => {
  //     let updatedFavorite = [...favouriteList];
  //     if (!updatedFavorite.includes(itemId)) {
  //       updatedFavorite = [...favouriteList, itemId];
  //     } else {
  //       updatedFavorite = updatedFavorite.filter(
  //         (favoriteItem) => itemId !== favoriteItem
  //       );
  //     }
  //     setFavouriteList(updatedFavorite);
  //   };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // minHeight: "100vh",
        }}
      >
        {/* {isLoading && <CircularProgress />} */}
      </Box>
      {/* <button onClick={navigateHandler}>Charcter Details</button> */}
      {/* <Link to={`/marvel/characters/details/1`} state={{ id: 1 }}>
            <button>Charcter Details</button>
          </Link> */}
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
          <ListSubheader component="div">
            Favourite Characters List
          </ListSubheader>
        </ImageListItem>
        {favIds.map((item) => (
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
                alt={item.title}
                loading="lazy"
              />
            </Link>
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                  //   onClick={() => {
                  //     updateFavorite(item.id);
                  //   }}
                >
                  {/* <InfoIcon /> */}
                  {/* {!Favourite && <StarBorderIcon />}
                      {Favourite && (
                        <StarBorderIcon style={{ color: "rgb(255, 210, 48)" }} />
                      )} */}
                  {favIds.find((e) => e.id === item.id) ? (
                    <StarIcon
                      style={{ fill: "rgb(255, 210, 48)" }}
                      onClick={() => removeFromFavorite(item.id)}
                    />
                  ) : (
                    <StarIcon onClick={() => removeFromFavorite()} />
                  )}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default FavCharsList;
