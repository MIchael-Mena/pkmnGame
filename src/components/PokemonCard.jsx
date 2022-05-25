
import styles from "./PokemonCard.module.css";
/* 
style={{textAlign: "revert", fontWeight: "bold", background: "orange", width: "100px"}} */

const PokemonCard = ({pokemon}) => {	
	return (
		<>
			<div className={styles.card}>
				<img className={styles.imgCard} src={pokemon?.sprites.other["official-artwork"].front_default} />
				<h2>#{pokemon?.id.toString() + " " + pokemon.name}</h2>
				<p>Habilidades: {pokemon?.abilities.map((act) => act.ability.name).join(", ") + "."}</p>
				<p> Tipos: {pokemon.types.map((aType)=>aType.type.name)} </p>
				<p className={styles.hp} > hp: {pokemon.stats[0].base_stat} </p>
			</div>
		</>
	)
}

export default PokemonCard;