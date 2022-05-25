import { useEffect, useState } from "react";
import axios from "axios";

/* const axios = require('axios').default; */

const useGetPokemon = (id, aState, max, min) => {
  const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";

  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });


  const getPrevAndNextAId = (idMain) => {
    let pokemones = []
    let previous = 4;
    let next = 4;

    if (idMain < min + next) {
      previous = idMain - min;
    };

    if (idMain > max - previous) {
      next = max - idMain;
    };

    for (let i = idMain - previous; i <= next + idMain; i++) {
      if (idMain !== i) {
        pokemones.push(axios.get(`${pokeUrl}${i}`, { timeout: 3000 }));
      }
    };
    return pokemones;
  };

  const getData = async () => {
    try {
      let pokemons = [];
      const res = await axios.get(`${pokeUrl}${id.toString()}`, { timeout: 3000 });
      pokemons.push(res.data);
      let idMainPoke = res.data.id;

      let previousAndNextPoke = await Promise.all(getPrevAndNextAId(idMainPoke));

      pokemons = pokemons.concat(previousAndNextPoke.map(res => res.data));

/*       console.log(pokemons); */

      setState({
        data: pokemons,
        error: null,
        loading: false,
      });
    } catch (error) {
      setState({
        data: [],
        error: error,
        loading: false,
      });
    }
  }

  useEffect(() => {
    getData();
  }, [aState]);

  return [state.data, state.loading, state.error];
};

export default useGetPokemon;