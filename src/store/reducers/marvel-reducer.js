import { ACTIONS } from "../actions/marvel-actions";

const initialState = { characterList: [] };

const MarvelListReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ACTIONS.GET_MARVEL_LIST: {
      return {
        ...state,
        characterList: payload.list.map((e) => ({ ...e, isFavourite: false })),
      };
    }
    case ACTIONS.UPDATE_FAVOURITE: {
      return {
        ...state,
        characterList: state.characterList.map((e) => ({
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
