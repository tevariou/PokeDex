import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import StarIcon from '@material-ui/icons/Star';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import favorite from '../../../../store/selectors/favorite';
import { addFavorite, delFavorite, getFavorite } from '../../../../store/actions';
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = () => {
    if (star) {
      dispatch(delFavorite(name));
      setStar(false);
    } else {
      dispatch(addFavorite(name, url));
      setStar(true);
    }
  };

  const handleError = () => {
    setSrc('/blank96.png');
  };

  useEffect(() => {
    dispatch(getFavorite(name));
  }, [dispatch, name]);

  useEffect(() => {
    if (favoriteSelector) {
      setStar(true);
    }
  }, [favoriteSelector]);

  useEffect(() => {
    setSrc(sprite(url));
  }, [url]);

  return (
    <>
      <img className={classes.img} src={src} onError={handleError} alt={name} />
      <GridListTileBar
        title={name}
        actionIcon={(
          <>
            <IconButton
              onClick={handleClick}
              aria-label={`star ${name}`}
              className={star ? classes.iconActive : classes.iconDisable}
            >
              <StarIcon />
            </IconButton>
            <IconButton onClick={handleToggle}>
              <InfoIcon />
            </IconButton>
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
              <Typography className={classes.typography}>The content of the Popover.</Typography>
            </Popover>
          </>
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
