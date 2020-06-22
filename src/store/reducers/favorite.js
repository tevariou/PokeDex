import ACTIONS from '../constants/redux';

const favorite = (state = {}, action) => {
  const { type, payload } = action;
  const ret = { ...state };
  switch (type) {
    case `${ACTIONS.ADD_FAVORITE}_SUCCESS`:
      return {
        ...state,
        [payload.name]: payload.url,
      };
    case `${ACTIONS.DEL_FAVORITE}_SUCCESS`:
      delete ret[payload.name];
      return ret;
    case `${ACTIONS.GET_FAVORITE}_LOAD`:
      return {
        ...state,
        [payload.name]: payload.result,
      };
    default:
      return state;
  }
};

export default favorite;
