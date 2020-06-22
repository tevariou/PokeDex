import { combineReducers } from 'redux';
import pokemon from './pokemon';
import pokemonList from './pokemonList';
import favorite from './favorite';
import collectionState from './collectionState';
import api from './api';

export default combineReducers(
  {
    api,
    pokemonList,
    pokemon,
    favorite,
    collectionState,
  },
);
