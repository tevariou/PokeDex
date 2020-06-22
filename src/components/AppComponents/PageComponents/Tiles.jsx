import React from 'react';
import GridList from '@material-ui/core/GridList';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import pokemonList from '../../../store/selectors/pokemonList';
import Pokemon from './TilesComponents/Pokemon';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
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

  return (
    <div className={classes.root}>
      <GridList cellHeight={96} spacing={1} className={classes.gridList} cols={4}>
        {pokemonListSelector ? pokemonListSelector.map((pokemon) => (
          <GridListTile key={`tile-${pokemon.name}`}>
            <Pokemon name={pokemon.name} url={pokemon.url} />
          </GridListTile>
        )) : null }
      </GridList>
    </div>
  );
};

export default Tiles;
