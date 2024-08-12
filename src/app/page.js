import styles from "./page.module.css";
import Image from "next/image";

import PokeCard from "./components/cards/PokeCard";

export async function getPoke(){
  const maxPokemon = 251
  const api = "https://pokeapi.co/api/v2/pokemon"

  const res = await fetch(`${api}/?limit=${maxPokemon}`)
  const data = await res.json()

  //add poke index
  data.results.forEach((item, index) => {
      item.id = index+1 
  });

  return(data.results)
}
export default async function Home(){
  const pokemons = await getPoke()
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png" width={50} height={50} alt="PokeNext" />
     </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon)=>(
          <PokeCard key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </>
   
  );
}
