import api from '../../services/api';
import createRequest from '../helpers/createRequest';
import ACTIONS from '../constants/pokemon';

export const getPokemonList = (page) => createRequest(
  api.get('/', api.intervalFromPage(page)),
  ACTIONS.GET_POKEMON_LIST,
  { page },
);
export const getPokemon = (name) => createRequest(api.get(`/${name}`), ACTIONS.GET_POKEMON, { name });
