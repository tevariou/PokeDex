import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#bd0b32',
  },
  grow: {
    flexGrow: 1,
  },
}));

const Bar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Pokedex
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Bar;
