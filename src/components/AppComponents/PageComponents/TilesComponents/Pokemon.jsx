import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import Tooltip from '@material-ui/core/Tooltip';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import favorite from '../../../../store/selectors/favorite';
import { addFavorite, delFavorite, getFavorite } from '../../../../store/actions';
import Details from './PokemonComponents/Details';

const useStyles = makeStyles(() => ({
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.07) 0%, '
      + 'rgba(0,0,0,0.04) 70%, rgba(0,0,0,0) 100%)',
    height: '25%',
  },
  iconActive: {
    color: '#E5C845',
  },
  iconDisable: {
    color: 'white',
  },
}));

const Pokemon = (props) => {
  const { name, url } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [star, setStar] = useState(false);
  const favoriteSelector = useSelector(favorite(name));

  const handleClick = () => {
    if (star) {
      dispatch(delFavorite(name));
      setStar(false);
    } else {
      dispatch(addFavorite(name, url));
      setStar(true);
    }
  };

  useEffect(() => {
    dispatch(getFavorite(name));
  }, [dispatch, name]);

  useEffect(() => {
    if (favoriteSelector) {
      setStar(true);
    }
  }, [favoriteSelector]);

  return (
    <>
      <Details name={name} url={url} />
      <GridListTileBar
        title={name.replace(/^\w/, (c) => c.toUpperCase())}
        actionIcon={(
          <Tooltip title="Add to collection">
            <IconButton
              onClick={handleClick}
              aria-label={`star ${name}`}
              className={star ? classes.iconActive : classes.iconDisable}
            >
              <StarIcon />
            </IconButton>
          </Tooltip>
        )}
        actionPosition="right"
        className={classes.titleBar}
      />
    </>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Pokemon;
