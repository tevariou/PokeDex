import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import React from 'react';

const Header = () => (
  <AppBar>
    <Toolbar>
      <Typography variant="h6">Pokedex</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
