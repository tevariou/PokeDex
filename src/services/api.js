const API_URL = 'https://pokeapi.co/api/v2/pokemon';

const INTERVAL = 50;

const intervalFromPage = (page) => ({ offset: INTERVAL * (page - 1), limit: INTERVAL });

const get = async (route, params = {}) => {
  const url = new URL(`${API_URL}${route}`);
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
  return fetch(url.href, { method: 'GET' });
};

export default {
  API_URL,
  INTERVAL,
  intervalFromPage,
  get,
};
