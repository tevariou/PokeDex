import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import pokemonList from '../../../store/selectors/pokemonList';
import sprite from '../../../services/sprite';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingBottom: 96,
  },
  gridList: {
    transform: 'translateZ(0)',
  },
  titleBar: {
    background: 'rgba(0,0,0,0) 0%', //   'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
    //   'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'black',
  },
}));

const Tiles = (props) => {
  const classes = useStyles();
  const { page } = props;
  const pokemonListSelector = useSelector(pokemonList(page - 1));

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

Tiles.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Tiles;
