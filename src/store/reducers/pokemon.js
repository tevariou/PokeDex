import ACTIONS from '../constants/pokemon';

const pokemon = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${ACTIONS.GET_POKEMON}_SUCCESS`:
      return {
        ...state,
        [payload.url]: payload,
      };
    default:
      return state;
  }
};

export default pokemon;
