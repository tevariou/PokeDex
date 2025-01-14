import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Tiles from './PageComponents/Tiles';
import api from '../../store/selectors/api';
import Bar from './PageComponents/Bar';
import { getPokemonList, reloadPokemonList } from '../../store/actions';
import pokemonList from '../../store/selectors/pokemonList';
import Loading from '../Loading';

const Page = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const page = Number(id);
  const { loading, success, error } = useSelector(api.get_pokemon_list);
  const pokemonListSelector = useSelector(pokemonList(page));

  useEffect(() => {
    if (pokemonListSelector === undefined) {
      dispatch(getPokemonList(page));
    } else {
      dispatch(reloadPokemonList());
    }
  }, [dispatch, page, pokemonListSelector]);

  return (
    <>
      {success ? (
        <>
          <Tiles />
          <Bar />
        </>
      ) : null }
      {error ? 'Error...' : null }
      {loading ? <Loading /> : null }
    </>
  );
};

export default Page;
