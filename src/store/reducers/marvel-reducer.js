import { ACTIONS } from "../actions/marvel-actions";

const initialState = { marvelList: [] };

const MarvelListReducer = (state = initialState, action) => {
  const { payload, type } = action;
  console.log("stateee:", state);
  console.log("typeeee:", type);
  console.log("payloaddd:", payload);
  switch (type) {
    case ACTIONS.GET_MARVEL_LIST: {
      return {
        ...state,
        marvelList: payload.list.map((e) => ({ ...e, isFavourite: false })),
      };
    }
    case ACTIONS.UPDATE_FAVOURITE: {
      return {
        ...state,
        marvelList: state.marvelList.map((e) => ({
          ...e,
          isFavourite: e.id === payload.id ? !e.isFavourite : e.isFavourite,
        })),
      };
    }
    default:
      return state;
  }
};

export default MarvelListReducer;
