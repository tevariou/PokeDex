const API_URL = 'https://pokeapi.co/api/v2/pokemon';

const INTERVAL = 50;

const intervalFromPage = (page) => ({ offset: INTERVAL * page, limit: INTERVAL });

const get = async (apiUrl, params = {}) => {
  const url = new URL(apiUrl);
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
  return fetch(url.href, { method: 'GET' });
};

export default {
  API_URL,
  intervalFromPage,
  get,
};
