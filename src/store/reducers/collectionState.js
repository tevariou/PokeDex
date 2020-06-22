import ACTIONS from '../constants/redux';

const collectionState = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case ACTIONS.DISPLAY_COLLECTION:
      return true;
    case ACTIONS.HIDE_COLLECTION:
      return false;
    default:
      return state;
  }
};

export default collectionState;
