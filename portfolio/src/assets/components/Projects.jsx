import styles from '../css/Projects.module.css';

import ThemeContext from '../../contexts/ThemeContext';

import projeto1 from '../images/bookstore.png';
import projeto2 from '../images/weather.png';
import projeto3 from '../images/todolist.png';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';

import { FiGithub } from "react-icons/fi";

const Projects = () => {

    const themeContext = useContext(ThemeContext);

    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();

    const [refImg1, inViewImg1] = useInView();
    const [refImg2, inViewImg2] = useInView();
    const [refImg3, inViewImg3] = useInView();

    const [headerRef, headerInView] = useInView();
    const [projectsRef, projectsInView] = useInView();

    const [isFirstDescriptionExpanded, setIsFirstDescriptionExpanded] = useState(false);
    const [isThirdDescriptionExpanded, setIsThirdDescriptionExpanded] = useState(false);

    const toggleFirstDescription = () => {
        setIsFirstDescriptionExpanded(!isFirstDescriptionExpanded);
    };

    const toggleThirdDescription = () => {
        setIsThirdDescriptionExpanded(!isThirdDescriptionExpanded);
    };

    const variants = {
        hidden: { opacity: 0, x: -100 }, 
        show: {
            opacity: 1,
            x: 0, 
            transition: {
                duration: 1.5,
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
                duration: 1.5,
                ease: "easeOut",
            },
        },
    };

    const headerVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: { 
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut" }
        }
    };
    
    const projectsVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, delay: 0.5, ease: "easeOut" }
        }
    };
        
    return (
        <>
            <motion.section 
                className={`${styles.containerProjects} ${themeContext.theme === 'dark' ? styles.darkMode : ''}`}
                ref={projectsRef}
                initial="hidden"
                animate={projectsInView ? "visible" : "hidden"}
                variants={projectsVariants}
            >
                    <motion.section 
                        className={styles.projectHeader}
                        ref={headerRef}
                        initial="hidden"
                        animate={headerInView ? "visible" : "hidden"}
                        variants={headerVariants}
                    >
                            <h4>MEUS PROJETOS</h4>
                            <h2>O que eu desenvolvi</h2>
                    </motion.section>

                    <section className={styles.projects}>
                            <section className={styles.projectsWrap}>
                                <motion.aside 
                                    ref={ref1} 
                                    animate={inView1 ? variants.show : variants.hidden} 
                                    variants={variants} 
                                    className={styles.project1}
                                >
                                    <h4 className={styles.projectName}>Book Store</h4>
                                    <ul className={styles.projectStack}>
                                        <li>React</li>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                    </ul>
                                    <p className={`${styles.projectDescription} ${isFirstDescriptionExpanded ? styles.expanded : ''}`}>
                                        A Book Store é uma aplicação web interativa, projetada para simular uma experiência de compra de livros online. A interface é composta por uma barra de navegação intuitiva com busca, acesso fácil ao carrinho de compras e opções de login. A página inicial apresenta alguns destaques, seções para lançamentos e best sellers, ambas com funcionalidade de adicionar livros ao carrinho, além de um convite para inscrição na Newsletter e um link para baixar o aplicativo da loja. O design é focado na usabilidade e na estética agradável, criando um ambiente convidativo para os usuários explorarem e comprarem livros. Este projeto demonstra habilidades em gerenciamento de estado e componentização no React, além de oferecer uma visão prática do desenvolvimento de e-commerce.
                                    </p>
                                    <a className={styles.viewMoreBtn} onClick={toggleFirstDescription}>
                                        {isFirstDescriptionExpanded ? 'Ver menos' : 'Ler mais'}
                                    </a>

                                    <div className={styles.projectLinksWrap}>
                                        <a className={styles.projectBtn} href="https://book-store-rho-ten.vercel.app/" target='_blank' rel='noopener noreferrer'>
                                            Visualizar Website
                                        </a>
                                        <a href="https://github.com/lucasecs92/book-store-react/tree/main/book-store" target="_blank" rel="noopener noreferrer" className={styles.githubIcon}><FiGithub/></a>
                                    </div>
                                </motion.aside>
                                <motion.figure ref={refImg1} animate={inViewImg1 ? "show" : "hidden"} variants={imgVariants} className={styles.projectImg}
                                >
                                    <img src={projeto1} alt="imagem de capa do bookstore" />
                                </motion.figure>
                            </section>

                            <section className={styles.projectsWrapReverse}>
                                <motion.aside ref={ref2} animate={inView2 ? imgVariants.show : imgVariants.hidden} variants={imgVariants} className={styles.project2}>
                                    <h4 className={styles.projectName}>Weather</h4>
                                    <ul className={styles.projectStackReverse}>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>CSS</li>
                                    </ul>
                                    <p className={styles.projectDescription}>
                                        O Weather App é uma aplicação interativa que permite aos usuários pesquisar e visualizar dados meteorológicos rápidos, confiáveis e em tempo real. Utilizando um design responsivo e uma interface de usuário (UI) intuitiva, o aplicativo oferece uma experiência de usuário (UX) agradável e eficiente.
                                    </p>
                                    <div className={styles.projectLinksWrapReverse}>
                                        <a href="https://github.com/lucasecs92/weather-react/tree/main/weather" target="_blank" rel="noopener noreferrer" className={styles.githubIcon}><FiGithub/></a>
                                        <a className={styles.projectBtnReverse} href="https://weather-navy-xi.vercel.app/" target='_blank' rel='noopener noreferrer'>
                                            Visualizar Website
                                        </a>
                                    </div>
                                </motion.aside>

                                <motion.figure ref={refImg2} animate={inViewImg2 ? "show" : "hidden"} variants={variants} className={styles.projectImgReverse}>
                                    <img src={projeto2} alt="imagem de capa do projeto" />
                                </motion.figure>
                            </section>

                            <section className={styles.projectsWrap}>
                                <motion.aside ref={ref3} animate={inView3 ? variants.show : variants.hidden} variants={variants} className={styles.project3}>
                                    <h4 className={styles.projectName}>To Do List</h4>
                                    <ul className={styles.projectStack}>
                                        <li>TypeScript</li>
                                        <li>React</li>
                                        <li>CSS</li>
                                    </ul>
                                    <p className={`${styles.projectDescription} ${isThirdDescriptionExpanded ? styles.expanded : ''}`}>
                                        O To Do List é uma aplicação web que oferece uma maneira simples e eficaz de gerenciar tarefas diárias. Com uma interface limpa e funcionalidades intuitivas, os usuários podem adicionar, editar, remover e marcar tarefas como concluídas com facilidade, assim sendo classificado como CRUD. O projeto demonstra o uso de estados e efeitos em React, além de práticas de desenvolvimento como a componentização e a gestão de estados locais e globais. O To Do List é uma ferramenta versátil que ajuda os usuários a manterem-se organizados e produtivos.
                                    </p>
                                    <a className={styles.viewMoreBtn} onClick={toggleThirdDescription}>
                                        {isThirdDescriptionExpanded ? 'Ver menos' : 'Ler mais'}
                                    </a>

                                    <div className={styles.projectLinksWrap}>
                                        <a className={styles.projectBtn} href="https://todolist-bay-five.vercel.app/" target='_blank' rel='noopener noreferrer'>
                                            Visualizar Website
                                        </a>
                                        <a href="https://github.com/lucasecs92/to-do-list/tree/main/todolist" target="_blank" rel="noopener noreferrer" className={styles.githubIcon}><FiGithub/></a>
                                    </div>
                                </motion.aside>
                                <motion.figure ref={refImg3} animate={inViewImg3 ? "show" : "hidden"} variants={imgVariants} className={styles.projectImg}>
                                    <img src={projeto3} alt="imagem de capa do projeto" />
                                </motion.figure>
                            </section> 
                    </section>
            </motion.section>
        </>
    )
}

export default Projects;