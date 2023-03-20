import {ACTIONS} from "../actions/theme-actions";

const initialState = {theme: "light"};

const ThemeReducer = (state = initialState, action) => {
  const {payload, type} = action;
  console.log(payload);
  switch (type) {
    case ACTIONS.TOGGLE_THEME: {
      return {
        ...state,
        theme: payload,
      };
    }
    default:
      return state;
  }
};

export default ThemeReducer;
