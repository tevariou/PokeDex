import React from 'react';
import GridList from '@material-ui/core/GridList';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import pokemonList from '../../../store/selectors/pokemonList';
import Pokemon from './TilesComponents/Pokemon';
import favoriteList from '../../../store/selectors/favoriteList';
import collectionState from '../../../store/selectors/collectionState';
import api from '../../../services/api';

const useStyles = makeStyles(() => ({
  root: {
    flexWrap: 'wrap',
    overflow: 'hidden',
    paddingBottom: 65,
  },
  gridList: {
    transform: 'translateZ(0)',
  },

}));

const Tiles = () => {
  const classes = useStyles();
  const { id } = useParams();
  const page = Number(id);
  const pokemonListSelector = useSelector(pokemonList(page));
  const favoriteListSelector = useSelector(favoriteList);
  const collectionStateSelector = useSelector(collectionState);

  return (
    <div className={classes.root}>
      <GridList cellHeight={96} spacing={1} className={classes.gridList} cols={4}>
        {!collectionStateSelector && pokemonListSelector ? pokemonListSelector.map((pokemon) => (
          <GridListTile key={`tile-${pokemon.name}`}>
            <Pokemon name={pokemon.name} url={pokemon.url} />
          </GridListTile>
        )) : null }
        {collectionStateSelector && favoriteListSelector
          ? Object
            .keys(favoriteListSelector)
            .slice(api.INTERVAL * (page - 1), api.INTERVAL)
            .map((name) => (
              <GridListTile key={`tile-fav-${name}`}>
                <Pokemon name={name} url={favoriteListSelector[name]} />
              </GridListTile>
            )) : null}
      </GridList>
    </div>
  );
};

export default Tiles;
