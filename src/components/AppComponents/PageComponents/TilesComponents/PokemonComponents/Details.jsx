import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import sprite from '../../../../../services/sprite';

const useStyles = makeStyles(() => ({
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.07) 0%, '
      + 'rgba(0,0,0,0.04) 70%, rgba(0,0,0,0) 100%)',
    textTransform: 'none',
    textAlign: 'left',
  },
}));

const Details = (props) => {
  const { name, url } = props;
  const classes = useStyles();
  const [src, setSrc] = useState('/blank96.png');

  const handleError = () => {
    setSrc('/blank96.png');
  };

  useEffect(() => {
    setSrc(sprite(url));
  }, [url]);

  return (
    <>
      <img src={src} onError={handleError} alt={name} />
      <GridListTileBar
        title={name.replace(/^\w/, (c) => c.toUpperCase())}
        className={classes.titleBar}
      />
    </>
  );
};

Details.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Details;
