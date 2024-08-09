import Image from "next/image"
import styles from "./About.module.css"

export default function About(){
    return(
        <div className={styles.about}> 
            <h1>Sobre o projeto</h1>
            <p>Lorem LoremLoremLoremLoremLoremLorem vLoremLorem Loremv LoremLoremLorem Lorem</p>
            <Image src="/images/charizard.png" width={300} height={300} alt="Charizard"/>
        </div>
    )
}