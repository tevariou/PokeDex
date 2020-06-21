import ACTIONS from '../constants/redux';

const pokemon = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${ACTIONS.GET_POKEMON}_SUCCESS`:
      return {
        ...state,
        [payload.name]: payload,
      };
    default:
      return state;
  }
};

export default pokemon;
