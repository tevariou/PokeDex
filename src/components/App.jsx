import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Page from './AppComponents/Page';

const App = () => (
  <>
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
  </>
);

export default App;
