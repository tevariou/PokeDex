import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import Tooltip from '@material-ui/core/Tooltip';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addFavorite, delFavorite, getFavorite } from '../../../../../store/actions';
import favorite from '../../../../../store/selectors/favorite';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
  },
  iconActive: {
    color: '#E5C845',
  },
  iconDisable: {
    color: 'white',
  },
}));

const Star = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { name, url } = props;
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
    if (favoriteSelector) {
      setStar(true);
    }
  }, [favoriteSelector]);

  useEffect(() => {
    dispatch(getFavorite(name));
  }, [dispatch, name]);

  return (
    <Tooltip className={classes.root} title="Add to collection">
      <IconButton
        size="small"
        onClick={handleClick}
        aria-label={`star ${name}`}
        className={star ? classes.iconActive : classes.iconDisable}
      >
        <StarIcon />
      </IconButton>
    </Tooltip>
  );
};

Star.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Star;
