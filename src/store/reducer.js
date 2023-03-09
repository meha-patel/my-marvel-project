import { combineReducers } from "redux";
// import FavouriteReducer from "../components/favourite-chars-list/FavouriteReducer";
import MarvelListReducer from "./reducers/marvel-reducer";

const RootReducer = combineReducers({
  marvelList: MarvelListReducer,
  // favourite: FavouriteReducer,
});

export default RootReducer;
