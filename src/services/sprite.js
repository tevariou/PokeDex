const HOST_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const sprite = (id) => `${HOST_URL}${id}.png`;

export default sprite;
