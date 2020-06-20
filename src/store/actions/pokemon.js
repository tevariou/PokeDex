import api from '../../services/api';
import createRequest from '../helpers/createRequest';
import ACTIONS from '../constants/pokemon';


export const getPokemonList = (page) => createRequest(
  api.get(api.API_URL, api.intervalFromPage(page)),
  ACTIONS.GET_POKEMON_LIST,
  { page },
);
export const getPokemon = (url) => createRequest(api.get(url), ACTIONS.GET_POKEMON, { url });
