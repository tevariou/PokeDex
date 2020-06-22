const createLocalStorage = (result, name, params = {}) => (dispatch) => {
  if (result) {
    dispatch({ type: `${name.toUpperCase()}_LOAD`, payload: { ...params, result } });
  } else {
    dispatch({ type: `${name.toUpperCase()}_SUCCESS`, payload: { ...params } });
  }
};

export default createLocalStorage;
