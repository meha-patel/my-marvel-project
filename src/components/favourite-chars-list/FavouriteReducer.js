const initialState = { favouriteList: [] };

const FavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "isFavourite": {
      return { ...state, favouriteList: action.payload.fav };
    }
    case "removeFavourite": {
      return {
        ...state,
        favouriteList: favouriteList.filter(
          (item) => item.id !== action.payload.favId
        ),
      };
    }
    default:
      return state;
  }
};

export default FavouriteReducer;
