import { useContext } from "react";
import useGetPokemon from "../hooks/useGetPokemon";

import PokemonCard from "./PokemonCard";
import PokemonNotFoundCard from "./PokemonNotFoundCard";
import { PokeContext } from "./PokeContext";
import { ReadyContext } from "../views/ReadyContext";

import styles from "./Carousel.module.css";

import { navigateCarousel, sortCollection} from "../functions/functionCarousel";


const Carousel = ({ maxPosition, minPosition, title }) => {
	const { pokeId, setPokeId } = useContext(PokeContext);
	const { readyToBattle } = useContext(ReadyContext);
	const [pokemons, loading, error] = useGetPokemon(pokeId, pokeId, maxPosition, minPosition);

	return (
		<>
			<div className={styles.container} >
				{loading ? (
					<h1 className={styles.centerElement}>Cargando...</h1>
				) : error ? (
					<div className={styles.centerElement} >
						<PokemonNotFoundCard />
					</div>
				) : (
					<>
						<div className={styles.titleContainer}>
							<h1 className={styles.titleCarousel}>{title}</h1>
						</div>

						<main className={styles["carousel"]} style={{ ['--position']: pokemons[0].id, ['--cards']: 7 }}>
							{sortCollection(pokemons.slice()).map((pokemon, i) => {
								return (
									<div className={styles.card} style={{ ['--offset']: pokemon.id }} key={pokemon.id}>
										<PokemonCard pokemon={pokemon} />
									</div>
								)
							})}
						</main>
						<div className={styles.navigationArrow}>
							<button className={styles.select}
								onClick={() => readyToBattle(pokemons[0].id)}>
								<label className={styles.selectText}>Selecionar</label>
							</button>

							<button className={`${styles.arrow} ${styles.left}`}
								disabled={!(pokemons[0].id > minPosition)}
								onClick={() => navigateCarousel(-1, pokemons[0].id, setPokeId)} />

							<button className={`${styles.arrow} ${styles.right}`}
								disabled={!(pokemons[0].id < maxPosition)}
								onClick={() => navigateCarousel(1, pokemons[0].id, setPokeId)} />
						</div>
					</>
				)}
			</div>

		</>
	)
};

export default Carousel;