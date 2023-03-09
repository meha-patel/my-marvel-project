import { combineReducers } from "redux";
import FavouriteReducer from "../components/favourite-chars-list/FavouriteReducer";
import MarvelListReducer from "../components/marvel-characters-list/marvel-list-reducer";

const RootReducer = combineReducers({
  marvelList: MarvelListReducer,
  favourite: FavouriteReducer,
});

export default RootReducer;
