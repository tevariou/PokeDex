import ACTIONS from '../constants/pokemon';

const pokemonList = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${ACTIONS.GET_POKEMON_LIST}_SUCCESS`:
      return {
        ...state,
        [payload.page]: [...payload.results],
      };
    default:
      return state;
  }
};

export default pokemonList;
