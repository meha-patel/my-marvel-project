import {combineReducers} from "redux";
import MarvelListReducer from "./reducers/marvel-reducer";
import ThemeReducer from "./reducers/theme-reducer";

const RootReducer = combineReducers({
  marvels: MarvelListReducer,
  theme: ThemeReducer,
});

export default RootReducer;
