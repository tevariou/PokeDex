import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addFavorite, delFavorite, getFavorite } from '../../../../store/actions';
import favorite from '../../../../store/selectors/favorite';
import sprite from '../../../../services/sprite';

const useStyles = makeStyles(() => ({
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.07) 0%, '
      + 'rgba(0,0,0,0.04) 70%, rgba(0,0,0,0) 100%)',
  },
  iconActive: {
    color: '#E5C845',
  },
  iconDisable: {
    color: 'white',
  },
  img: {
    width: '96px',
    height: '96px',
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'block',
  },
}));

const Pokemon = (props) => {
  const { name, url } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [star, setStar] = useState(false);
  const [src, setSrc] = useState('/blank96.png');
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

  const HandleError = () => {
    setSrc('/blank96.png');
  };

  useEffect(() => {
    dispatch(getFavorite(name));
  }, [dispatch, name]);

  useEffect(() => {
    setStar(favoriteSelector);
  }, [favoriteSelector]);

  useEffect(() => {
    setSrc(sprite(url));
  }, [url]);

  return (
    <>
      <img className={classes.img} src={src} onError={HandleError} alt={name} />
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
    </>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Pokemon;
