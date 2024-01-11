import { useContext } from 'react';
import styles from '../css/Home.module.css';

import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import ThemeContext from '../../contexts/ThemeContext'; 

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
    const themeContext = useContext(ThemeContext);
    
    const [ref, inView] = useInView();
    const [refImg, inViewImg] = useInView();

    const variants = {
        hidden: { opacity: 0, x: -100 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2.5,
                ease: "easeOut",
            },
        },
    };

    const imgVariants = {
        hidden: { opacity: 0, x: 100 }, 
        show: {
            opacity: 1,
            x: 0, 
            transition: {
                duration: 2.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <>
            <section className={`${styles.containerHome} ${themeContext.theme === 'dark' ? styles.darkMode : ''}`}>
                <section className={styles.description}>
                    <motion.article ref={ref} animate={inView ? variants.show : variants.hidden} variants={variants} className={styles.descriptionText}>
                        <p className={styles.greeting}>{"</> Olá Mundo!"}</p>
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
                    </motion.article>
                    <motion.figure ref={refImg} animate={inViewImg ? "show" : "hidden"} variants={imgVariants} className={styles.mainPhoto}>
                        <img src="https://github.com/lucasecs92.png" alt="Foto do meu perfil Github" />
                    </motion.figure>
                </section>
            </section> 
        </>
    )
}

export default Home;