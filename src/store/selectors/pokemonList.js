const pokemonList = (page) => (state) => state.pokemonList && state.pokemonList[page - 1]?.results;

export default pokemonList;
