import { useContext } from 'react';
import styles from '../css/Home.module.css';

import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { FaCode } from 'react-icons/fa';

import ThemeContext from '../../contexts/ThemeContext'; 

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
    // Acesse o contexto do tema
    const themeContext = useContext(ThemeContext);
    
    // Configure os observadores de interseção para animações
    const [ref, inView] = useInView();
    const [refImg, inViewImg] = useInView();

    // Defina as variantes de animação para o texto e a imagem
    const variants = {
        hidden: { opacity: 0, x: -100 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
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
                duration: 2,
                ease: "easeOut",
            },
        },
    };

    return (
        <>
            <section className={`${styles.containerHome} ${themeContext.theme === 'dark' ? styles.darkMode : ''}`}>
                <section className={styles.description}>
                    <motion.article ref={ref} animate={inView ? variants.show : variants.hidden} variants={variants} className={styles.descriptionText}>
                        <p className={styles.greeting}>{"Olá Mundo!"}<FaCode /></p>
                        
                        <h1><span>Eu sou</span> Lucas Eduardo</h1>
                        <p className={styles.smallDescription}>
                            Um <span>Desenvolvedor Front-end</span> interessado em criar aplicações e experiências web interativas e apaixonado por transformar ideias em realidade. Busco constantemente novas maneiras de inovar e expandir minhas habilidades e conhecimento.           
                        </p>
                        <section className={styles.socialMedia}>
                            <ul className={styles.socialList}>
                                <li>
                                    <a href="https://www.linkedin.com/in/lucasecs/" target="_blank" rel="noopener noreferrer"><BiLogoLinkedin/></a>
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