import api from '../../services/api';
import createRequest from '../helpers/createRequest';
import ACTIONS from '../constants/redux';

export const getPokemonList = (page) => createRequest(
  api.get('/', api.intervalFromPage(page)),
  ACTIONS.GET_POKEMON_LIST,
  { page },
);
export const getPokemon = (name) => createRequest(api.get(`/${name}`), ACTIONS.GET_POKEMON, { name });
export const reloadPokemonList = () => ({ type: `${ACTIONS.GET_POKEMON_LIST}_RELOAD` });
export const resetPokemonList = () => ({ type: `${ACTIONS.GET_POKEMON_LIST}_RESET` });
