import React from 'react';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import theme from '../config/theme';

const Router = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        <Route path="/:page">
          <Page />
          {({ location }) => {
            const query = new URLSearchParams(location.search);
            const page = parseInt(query.get('page') || '1', 10);
            return (
              <Pagination
                page={page}
                count={10}
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={`/${item.page}`}
                    {...item}
                  />
                )}
              />
            );
          }}
        </Route>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default Router;
