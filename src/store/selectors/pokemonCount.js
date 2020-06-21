const pokemonCount = (page) => (state) => state.pokemonList && state.pokemonList[page - 1]?.count;

export default pokemonCount;
