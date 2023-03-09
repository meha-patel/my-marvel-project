const initialState = { favouriteList: [] };

const FavouriteReducer = (state = initialState, action) => {
  console.log("action for Fav list:", action?.payload?.favIds);
  switch (action.type) {
    case "isFavourite": {
      return (state.favouriteList = action.payload.favIds);
    }
    case "removeFavourite": {
      return state.favouriteList.filter((item) => item.id !== action.payload.favId);
    }
    default:
      return state;
  }
};

export default FavouriteReducer;
