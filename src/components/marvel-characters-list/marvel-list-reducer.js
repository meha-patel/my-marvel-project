const initialState = { marvelList: [] };

const MarvelListReducer = (state = initialState, action) => {
//   console.log("action of marvelListReducer:", action);
  switch (action.type) {
    case "marvel-list": {
      return (state.marvelList = action.payload.list);
    }
    default:
      return state;
  }
};

export default MarvelListReducer;
