import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Tiles from './PageComponents/Tiles';
import api from '../../store/selectors/api';
import Bar from './PageComponents/Bar';
import { getPokemonList, reloadPokemonList } from '../../store/actions';
import pokemonList from '../../store/selectors/pokemonList';
import Loading from '../Loading';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: 'linear-gradient(to top, rgb(189,240,211), rgb(121,190,239))',
  },
}));

const Page = () => {
  const classes = useStyles();
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
    <div className={classes.root}>
      {success ? (
        <>
          <Tiles />
          <Bar />
        </>
      ) : null }
      {error ? 'Error...' : null }
      {loading ? <Loading /> : null }
    </div>
  );
};

export default Page;
