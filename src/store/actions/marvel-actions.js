const ACTIONS = {
  GET_MARVEL_LIST: "GET_MARVEL_LIST",
  UPDATE_FAVOURITE: "UPDATE_FAVOURITE",
};

const getMarvels = (resp) => ({
  type: ACTIONS.GET_MARVEL_LIST,
  payload: { list: resp },
});

const updateFavourite = (id) => {
  return {
    type: ACTIONS.UPDATE_FAVOURITE,
    payload: { id: id },
  };
};

export { ACTIONS, getMarvels, updateFavourite };
