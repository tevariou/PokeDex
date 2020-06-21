import { combineReducers } from 'redux';
import createApiReducer from '../helpers/createApiReducer';
import ACTIONS from '../constants/redux';

const api = combineReducers({
  get_pokemon_list: createApiReducer(ACTIONS.GET_POKEMON_LIST),
  get_pokemon: createApiReducer(ACTIONS.GET_POKEMON),
});

export default api;
