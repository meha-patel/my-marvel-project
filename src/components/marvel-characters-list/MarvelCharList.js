import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getList } from "../../api/marvel-api";
import { useDispatch } from "react-redux";

const MarvelCharList = () => {
  const [marvelList, setMarvelList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favourite, setFavourite] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    function fetchList() {
      setIsLoading(true);
      getList().then((resp) => {
        dispatch({ type: "marvel-list", payload: { list: resp } });
        setMarvelList(resp);
        setIsLoading(false);
      });
    }
    fetchList();
    // setIsLoading(true);
    // GetMarvelList().then((resp) => {
    //   setMarvelList(resp);
    //   setIsLoading(false);
    // });
  }, [dispatch]);

  const addToFavorite = (status) => {
    if (status === true) {
      console.log("favourite:", favourite);
      dispatch({ type: "isFavourite", payload: { favIds: favourite } });
    }
  };

  const updateFavorite = (item) => {
    let updatedFavorite = [...favourite];
    if (!updatedFavorite.includes(item)) {
      updatedFavorite = [...favourite, item];
    } else {
      updatedFavorite = updatedFavorite.filter(
        (favoriteItem) => item.id !== favoriteItem.id
      );
    }
    setFavourite(updatedFavorite);
  };

  return (
    <div>
      {/* <h2>Marvel Charcter List</h2> */}
      {/* <ul>
        {marvelList.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // minHeight: "100vh",
        }}
      >
        {isLoading && <CircularProgress />}
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
          <ListSubheader component="div">Marvel Characters List</ListSubheader>
        </ImageListItem>
        {marvelList.map((item) => (
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
                  onClick={() => {
                    updateFavorite(item);
                  }}
                >
                  {/* <InfoIcon /> */}
                  {/* {!Favourite && <StarBorderIcon />}
                  {Favourite && (
                    <StarBorderIcon style={{ color: "rgb(255, 210, 48)" }} />
                  )} */}
                  {favourite.find((e) => e.id === item.id) ? (
                    <StarIcon
                      style={{ fill: "rgb(255, 210, 48)" }}
                      onClick={() => addToFavorite()}
                    />
                  ) : (
                    <StarIcon onClick={() => addToFavorite(true)} />
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

export default MarvelCharList;
