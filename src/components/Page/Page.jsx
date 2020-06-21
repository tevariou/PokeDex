import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Tiles from './PageComponents/Tiles';
import { getPokemonList } from '../../store/actions';
import api from '../../store/selectors/api';

const Page = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const page = Number(id);
  const { success, loading, error } = useSelector(api.get_pokemon_list);

  useEffect(() => {
    dispatch(getPokemonList(page - 1));
  }, [dispatch, page]);

  return (
    <>
      {success ? <Tiles page={page} /> : null }
      {error ? 'Error...' : null }
      {loading ? 'Loading...' : null }
    </>
  );
};

export default Page;
