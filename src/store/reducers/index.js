import { combineReducers } from 'redux';
import ACTIONS from '../constants/pokemon';
import createApiReducer from '../helpers/createApiReducer';
import pokemon from './pokemon';
import pokemonList from './pokemonList';

const api = combineReducers({
  get_pokemon_list: createApiReducer(ACTIONS.GET_POKEMON_LIST),
  get_pokemon: createApiReducer(ACTIONS.GET_POKEMON),
});

export default combineReducers(
  {
    api,
    pokemonList,
    pokemon,
  },
);
