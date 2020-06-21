import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { Link, useParams } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';
import pokemonCount from '../../../store/selectors/pokemonCount';
import ACTIONS from '../../../store/constants/pokemon';
import api from '../../../services/api';

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
  const dispatch = useDispatch();
  const { id } = useParams();
  const page = Number(id);
  const pokemonCountSelector = useSelector(pokemonCount(page));

  const handleChange = () => dispatch({ type: `${ACTIONS.GET_POKEMON_LIST}_RESET` });

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Pokedex
        </Typography>
        <Pagination
          page={page}
          count={Math.ceil(pokemonCountSelector / api.INTERVAL)}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/${item.page}`}
              /* eslint-disable-next-line react/jsx-props-no-spreading */
              {...item}
            />
          )}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Bar;
