import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import theme from '../config/theme';
import Page from './AppComponents/Page';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/1" />
        </Route>
        <Route path="/:id">
          <Page />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
