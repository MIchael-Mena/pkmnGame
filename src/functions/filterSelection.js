export const updateFilterPokemons = (pokemons, input) => {
    if (input !== "" && pokemons === false) {
      return pokemons.results.filter((aPokemon) => {
        aPokemon.name.toLowerCase().includes(input.toLowerCase())
      });
    }
  }