import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  root: {
    color: '#bd0b32',
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <CircularProgress className={classes.root} />
  );
};

export default Loading;
