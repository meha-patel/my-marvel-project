import {combineReducers} from "redux";
import MarvelListReducer from "./reducers/marvel-reducer";

const RootReducer = combineReducers({
  marvels: MarvelListReducer,
});

export default RootReducer;
