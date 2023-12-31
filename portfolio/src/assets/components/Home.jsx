import styles from '../css/Home.module.css';

import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const Home = () => {

    return (
        <>
            <section className={styles.containerHome}>
                <section className={styles.description}>
                    <article className={styles.descriptionText}>
                        <p className={styles.greeting}>{"OLÁ!"}</p>
                        <h3>Me chamo</h3>
                        <h1>LUCAS EDUARDO</h1>
                        <p className={styles.smallDescription}>
                            Eu sou um <span>Desenvolvedor Front-end Junior</span> interessado em criar aplicações e experiências web interativas.
                        </p>
                        <section className={styles.socialMedia}>
                            <ul className={styles.socialList}>
                                <li>
                                    <a href="https://www.linkedin.com/in/lucas-eduardo-cavalcante/" target="_blank" rel="noopener noreferrer"><BiLogoLinkedin/></a>
                                </li>

                                <li>
                                    <a href="https://github.com/lucasecs92" target="_blank" rel="noopener noreferrer"><FiGithub/></a>
                                </li>
                            </ul>
                        </section>
                    </article>
                    <figure className={styles.mainPhoto}>
                        <img src="https://github.com/lucasecs92.png" alt="Foto do meu perfil Github" />
                    </figure>
                </section>
            </section> 
        </>
    )
}

export default Home;