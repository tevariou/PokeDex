import createLocalStorage from '../helpers/createLocalStorage';
import ACTIONS from '../constants/redux';

export const getFavorite = (name) => createLocalStorage(localStorage.getItem(name), ACTIONS.GET_FAVORITE, { name });
export const addFavorite = (name) => createLocalStorage(localStorage.setItem(name, 'true'), ACTIONS.ADD_FAVORITE, { name });
export const delFavorite = (name) => createLocalStorage(localStorage.removeItem(name), ACTIONS.DEL_FAVORITE, { name });
