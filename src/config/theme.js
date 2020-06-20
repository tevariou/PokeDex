import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#333335' },
  secondary: { main: '#7c45c4' },
};

const themeName = 'Pokedex';

export default createMuiTheme({ palette, themeName });
