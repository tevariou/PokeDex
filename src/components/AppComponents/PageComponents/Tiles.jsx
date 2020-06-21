import React from 'react';
import GridList from '@material-ui/core/GridList';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import pokemonList from '../../../store/selectors/pokemonList';
import Pokemon from './TilesComponents/Pokemon';
import sprite from '../../../services/sprite';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingBottom: 65,
  },
  gridList: {
    transform: 'translateZ(0)',
  },
  img: {
    width: '96px',
    height: '96px',
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'block',
  },
}));

const Tiles = () => {
  const classes = useStyles();
  const { id } = useParams();
  const page = Number(id);
  const pokemonListSelector = useSelector(pokemonList(page));

  return (
    <div className={classes.root}>
      <GridList cellHeight={96} spacing={1} className={classes.gridList} cols={5}>
        {pokemonListSelector.map((pokemon) => (
          <GridListTile key={`tile-${pokemon.name}`}>
            <img className={classes.img} src={sprite(pokemon.url)} alt={pokemon.name} />
            <Pokemon name={pokemon.name} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Tiles;
