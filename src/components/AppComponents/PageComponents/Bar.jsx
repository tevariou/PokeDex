import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import pokemonCount from '../../../store/selectors/pokemonCount';
import api from '../../../services/api';
import { resetPokemonList, displayCollection, hideCollection } from '../../../store/actions';
import collectionState from '../../../store/selectors/collectionState';
import favoriteCount from '../../../store/selectors/favoriteCount';

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#bd0b32',
  },
  toolBar: {
    justifyContent: 'center',
  },
  typo: {
    fontWeight: 900,
    fontStyle: 'italic',
    fontSize: '200%',
    color: '#f1cb32',
    textShadow: '1px 1px 2px black',
  },
}));

const Bar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const page = Number(id);
  const pokemonCountSelector = useSelector(pokemonCount(page));
  const collectionStateSelector = useSelector(collectionState);
  const favoriteCountSelector = useSelector(favoriteCount);

  const handleSwitch = (event) => {
    if (event.target.checked) {
      dispatch(displayCollection());
    } else {
      dispatch(hideCollection());
    }
    history.push('/');
  };

  const handleChange = () => dispatch(resetPokemonList());

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6" color="secondary" className={classes.typo}>
          PoKéDex
        </Typography>
        <Pagination
          page={page}
          count={Math.ceil(
            (collectionStateSelector ? favoriteCountSelector : pokemonCountSelector) / api.INTERVAL,
          )}
          onChange={handleChange}
          renderItem={(item) => (
            (page !== item.page) ? (
              <PaginationItem
                component={Link}
                to={`/${item.page}`}
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...item}
              />
            ) : (
              <PaginationItem
                page={item.page}
                disabled
              />
            )
          )}
        />
        <FormGroup row>
          <FormControlLabel
            control={<Switch checked={collectionStateSelector} onChange={handleSwitch} name="switch" />}
            label="Collection only"
          />
        </FormGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Bar;
