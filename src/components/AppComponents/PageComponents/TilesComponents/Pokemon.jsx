import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addFavorite, delFavorite, getFavorite } from '../../../../store/actions';
import favorite from '../../../../store/selectors/favorite';

const useStyles = makeStyles(() => ({
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.1) 0%, '
      + 'rgba(0,0,0,0.05) 70%, rgba(0,0,0,0) 100%)',
  },
  iconActive: {
    color: '#E5C845',
  },
  iconDisable: {
    color: 'white',
  },
}));

const Pokemon = (props) => {
  const { name } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [star, setStar] = useState(false);
  const favoriteSelector = useSelector(favorite(name));

  const HandleClick = () => {
    if (star) {
      dispatch(delFavorite(name));
      setStar(false);
    } else {
      dispatch(addFavorite(name));
      setStar(true);
    }
  };

  useEffect(() => {
    dispatch(getFavorite(name));
  }, [dispatch, name]);

  useEffect(() => {
    setStar(favoriteSelector);
  }, [favoriteSelector]);

  return (
    <GridListTileBar
      title={name}
      actionIcon={(
        <IconButton
          onClick={HandleClick}
          aria-label={`star ${name}`}
          className={star ? classes.iconActive : classes.iconDisable}
        >
          <StarIcon />
        </IconButton>
      )}
      actionPosition="left"
      className={classes.titleBar}
    />
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Pokemon;
