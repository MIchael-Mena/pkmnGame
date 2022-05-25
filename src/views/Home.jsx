import React, { useState } from "react";
import Battle from "./Battle";
import { ReadyContext } from "./ReadyContext";
import Selection from "../components/Selection";


const Home = () => {
	const [initial, setInitial] = useState({ready: false, picked: null});

	const readyToBattle = (aIdPokemon) => {
		setInitial({ready:true, picked: aIdPokemon});
	};

	// Falta Implementar Rutas y batalla

	return (
		<>
			{
				<ReadyContext.Provider value={{
					readyToBattle,
				}}>

				{initial.ready ? <Battle /> : <Selection position={{max:898,min:1}} posApi={{max:898,min:1}} title="POKEMONES BASICOS"/>}
				{initial.ready ? <Battle /> : <Selection position={{max:10228,min:10001}} posApi={{max:1126,min:898}} title="POkEMONES ESPECIALES"/>}

				</ReadyContext.Provider>
			}
		</>
	);
};

export default Home;
