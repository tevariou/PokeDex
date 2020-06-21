import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import pokemonList from '../../../store/selectors/pokemonList';
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
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.1) 0%, '
      + 'rgba(0,0,0,0.05) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
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
            <img style={{ width: '96px', height: '96px', marginRight: 'auto', marginLeft: 'auto', display: 'block' }} src={sprite(pokemon.url)} alt={pokemon.name} />
            <GridListTileBar
              title={pokemon.name}
              actionIcon={(
                <IconButton aria-label={`star ${pokemon.name}`} className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              )}
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Tiles;
