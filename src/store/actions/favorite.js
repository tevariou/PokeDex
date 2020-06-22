import createLocalStorage from '../helpers/createLocalStorage';
import ACTIONS from '../constants/redux';

export const getFavorite = (name) => createLocalStorage(localStorage.getItem(name), ACTIONS.GET_FAVORITE, { name });
export const addFavorite = (name, url) => createLocalStorage(localStorage.setItem(name, url), ACTIONS.ADD_FAVORITE, { name, url });
export const delFavorite = (name) => createLocalStorage(localStorage.removeItem(name), ACTIONS.DEL_FAVORITE, { name });
