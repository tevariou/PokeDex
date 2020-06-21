import ACTIONS from '../constants/pokemon';

const pokemonList = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${ACTIONS.GET_POKEMON_LIST}_SUCCESS`:
      return {
        ...state,
        [payload.page - 1]: {
          count: payload.count,
          results: [...payload.results],
        },
      };
    default:
      return state;
  }
};

export default pokemonList;
