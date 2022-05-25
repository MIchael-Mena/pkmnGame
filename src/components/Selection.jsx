import React, { useState, useMemo, useEffect, createContext, useContext } from "react";
import useGetData from "../hooks/useGetData";
import Carousel from "./Carousel";
import { PokeContext } from "./PokeContext";
import styles from "./Selection.module.css";

import { updateFilterPokemons } from "../functions/filterSelection";
import useInputDebounced from "../hooks/useInputDebounced";

const Selection = ({ position, posApi, title }) => {
  const [input, setInput] = useState({ value: "", filterPokemons: [] });

  const [pokeId, setPokeId] = useState(position.min);

  const [pokemonAll, loadingAll, errorAll] = useGetData(`https://pokeapi.co/api/v2/pokemon?limit=${posApi.max}&offset=${posApi.min}`);

  useInputDebounced(setPokeId, input.value, (input.value !== ""), 1500);

  return (
    <>
      {loadingAll ? (
        <h1></h1>
      ) : errorAll ? (
        <h3>Error: {errorAll.message}</h3>
      ) : (
        <>
          <div className={styles.main}>
            <PokeContext.Provider
              value={{
                pokeId,
                setPokeId,
              }}>
              <Carousel maxPosition={position.max} minPosition={position.min} title={title}/>
            </PokeContext.Provider>
            <datalist id="pokeData">
              {pokemonAll.results.map((actPokemon, i) => (
                <option key={actPokemon.name}>{actPokemon.name}</option>
              ))}
            </datalist>
            <input type="text"
              className={styles.finder}
              onChange={(e) => setInput({ value: e.target.value })}
              list="pokeData" value={input.value} />
          </div>
        </>
      )
      }
    </>
  )
}


export default Selection;