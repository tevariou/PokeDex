const HOST_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const sprite = (url) => {
  const { pathname } = new URL(url);
  const id = pathname.split('/').slice(-2)[0];
  return `${HOST_URL}${id}.png`;
};

export default sprite;
