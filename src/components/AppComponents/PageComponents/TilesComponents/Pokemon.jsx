import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DetailsIcon from '@material-ui/icons/Details';
import ListItemText from '@material-ui/core/ListItemText';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import Popover from '@material-ui/core/Popover';
import PropTypes from 'prop-types';
import pokemon from '../../../../store/selectors/pokemon';
import api from '../../../../store/selectors/api';
import Details from './PokemonComponents/Details';
import { getPokemon, resetPokemon } from '../../../../store/actions';
import Loading from '../../../Loading';
import Star from './PokemonComponents/Star';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#bd0b32',
    color: 'white',
  },
  primary: {
    fontWeight: 900,
  },
  secondary: {
    color: 'white',
  },
  cell: {
    width: '100%',
    height: '100%',
  },
  star: {

  },
}));

const Pokemon = (props) => {
  const { name, url } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const pokemonSelector = useSelector(pokemon(name));
  const { loading, success, error } = useSelector(api.get_pokemon);

  const handleClose = () => {
    dispatch(resetPokemon());
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    dispatch(getPokemon(name));
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Star className={classes.star} name={name} url={url} />
      <Button className={classes.cell} onClick={handleClick}>
        <Details name={name} url={url} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        { success && pokemonSelector ? (
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <DetailsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Details"
                classes={{ primary: classes.primary, secondary: classes.secondary }}
                secondary={`${pokemonSelector.height} feet ${pokemonSelector.weight} lbs`}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FlashOnIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Abilities"
                classes={{ primary: classes.primary, secondary: classes.secondary }}
                secondary={pokemonSelector.abilities?.reduce(
                  (acc, val) => `${acc} ${val.ability?.name?.toUpperCase()}`, '',
                )}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EmojiNatureIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Types"
                classes={{ primary: classes.primary, secondary: classes.secondary }}
                secondary={pokemonSelector.types?.reduce(
                  (acc, val) => `${acc} ${val.type?.name?.toUpperCase()}`, '',
                )}
              />
            </ListItem>
          </List>
        ) : null}
        {error ? 'Error...' : null }
        {loading ? <Loading /> : null }
      </Popover>
    </>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Pokemon;
