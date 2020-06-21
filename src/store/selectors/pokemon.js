const pokemon = (name) => (state) => state.pokemon && state.pokemon[name];

export default pokemon;
