import styles from "./PokemonCard.module.css";
import detective from "../image/detective pikachu.png"

const PokemonNotFoundCard = ({pokemon}) => {


	return (
		<>
			<div className={styles.card} style={{backgroundColor: "orangered", borderRadius: "10rem"}}>
				<img className={styles.imgCard} src={detective} style={{backgroundColor: "orange"}}/>
				<h2># ...</h2>
				<p>Habilidades: ...</p>
			</div>
		</>
	)
}

export default PokemonNotFoundCard;