const createRequest = (apiFunction, name, params = {}) => async (dispatch) => {
  try {
    dispatch({
      type: `${name.toUpperCase()}_REQUEST`,
    });
    const resp = await apiFunction;
    try {
      const payload = await resp.json();
      dispatch({ type: `${name.toUpperCase()}_SUCCESS`, payload: { ...payload, ...params } });
    } catch (e) {
      dispatch({ type: `${name.toUpperCase()}_ERROR`, payload: e });
    }
  } catch (e) {
    dispatch({ type: `${name.toUpperCase()}_ERROR`, payload: e });
  }
};

export default createRequest;
