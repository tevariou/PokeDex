const defaultApiState = {
  loading: false,
  success: false,
  error: false,
};

const createApiReducer = (name) => (state = defaultApiState, action) => {
  switch (action.type) {
    case `${name}_REQUEST`:
      return {
        loading: true,
        success: false,
        error: false,
      };
    case `${name}_RELOAD`:
    case `${name}_SUCCESS`:
      return {
        loading: false,
        success: true,
        error: false,
      };
    case `${name}_ERROR`:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case `${name}_RESET`:
      return defaultApiState;
    default:
      return state;
  }
};

export default createApiReducer;
