import { combineReducers } from 'redux';
import pokemon from './pokemon';
import pokemonList from './pokemonList';
import api from './api';

export default combineReducers(
  {
    api,
    pokemonList,
    pokemon,
  },
);
