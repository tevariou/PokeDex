const createLocalStorage = (localStorageFunction, name, params = {}) => (dispatch) => {
  try {
    dispatch({
      type: `${name.toUpperCase()}_SUCCESS`,
      payload: {
        ...params,
        result: localStorageFunction,
      },
    });
  } catch (e) {
    dispatch({ type: `${name.toUpperCase()}_ERROR`, payload: e });
  }
};

export default createLocalStorage;
