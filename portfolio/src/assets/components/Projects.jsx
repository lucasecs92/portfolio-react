import styles from '../css/Projects.module.css';

import ThemeContext from '../../contexts/ThemeContext';

import projeto1 from '../images/bookstore.png';
import projeto2 from '../images/weather.png';
import projeto3 from '../images/todolist.png';
import projeto4 from '../images/jogo-numero-secreto.png';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';

import { FiGithub } from "react-icons/fi";
import { TbArrowBigUpLines } from "react-icons/tb";
import { IoEye } from "react-icons/io5";

import projectData from '../data/projectData.json';

const Projects = () => {
    // Acessando o contexto de tema para aplicar estilos condicionais.
    const themeContext = useContext(ThemeContext);

    // Hooks para verificar se um elemento está visível na viewport.
    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();
    const [ref4, inView4] = useInView();


    const [refImg1, inViewImg1] = useInView();
    const [refImg2, inViewImg2] = useInView();
    const [refImg3, inViewImg3] = useInView();
    const [refImg4, inViewImg4] = useInView();

    const [headerRef, headerInView] = useInView();
    const [projectsRef, projectsInView] = useInView();

    // Estados para controlar a expansão das descrições dos projetos.
    const [isFirstDescriptionExpanded, setIsFirstDescriptionExpanded] = useState(false);
    const [isThirdDescriptionExpanded, setIsThirdDescriptionExpanded] = useState(false);
    const [isFourthDescriptionExpanded, setIsFourthDescriptionExpanded] = useState(false); 

    // Funções para alternar a expansão das descrições dos projetos.
    const toggleFirstDescription = () => {
        setIsFirstDescriptionExpanded(!isFirstDescriptionExpanded);
    };
    const toggleThirdDescription = () => {
        setIsThirdDescriptionExpanded(!isThirdDescriptionExpanded);
    };
    const toggleFourthDescription = () => { 
        setIsFourthDescriptionExpanded(!isFourthDescriptionExpanded);
    };

    // Variantes de animação para os elementos do componente.
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
                            <h2>MEUS PROJETOS</h2>
                            <h3>O que eu desenvolvi</h3>
                    </motion.section>

                    <section className={styles.projects}>
                        <section className={styles.projectsWrap}>
                            <motion.aside 
                                ref={ref1} 
                                animate={inView1 ? variants.show : variants.hidden} 
                                variants={variants} 
                                className={styles.project1}
                            >
                                <h4 className={styles.projectName}>{projectData[0].name}</h4>
                                <ul className={styles.projectStack}>
                                    {projectData[0].stack.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                                <p className={`${styles.projectDescription} ${isFirstDescriptionExpanded ? styles.expanded : ''}`}>
                                    {projectData[0].description}
                                </p>
                                <a className={styles.viewMoreBtn} onClick={toggleFirstDescription}>
                                    {isFirstDescriptionExpanded ? <TbArrowBigUpLines/> : 'Ler mais'}
                                </a>

                                <div className={styles.projectLinksWrap}>
                                    <a className={styles.projectDeploy} href={projectData[0].deploy} target='_blank' rel='noopener noreferrer'>
                                        <IoEye/> <span>Deploy</span>
                                    </a>
                                    <a className={styles.githubIcon} href={projectData[0].github} target='_blank' rel='noopener noreferrer'>
                                        <FiGithub/> <span>GitHub</span>
                                    </a>
                                </div>
                            </motion.aside>
                            <motion.figure ref={refImg1} animate={inViewImg1 ? "show" : "hidden"} variants={imgVariants} className={styles.projectImg}
                            >
                                <img src={projeto1} alt="imagem de capa do bookstore" />
                            </motion.figure>
                        </section>
                        <section className={styles.projectsWrapReverse}>
                            <motion.aside 
                                ref={ref2} 
                                animate={inView2 ? imgVariants.show : imgVariants.hidden} 
                                variants={imgVariants} 
                                className={styles.project2}
                            >
                                <h4 className={styles.projectName}>{projectData[1].name}</h4>
                                <ul className={styles.projectStackReverse}>
                                    {projectData[1].stack.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                                <p className={`${styles.projectDescription} ${isFirstDescriptionExpanded ? styles.expanded : ''}`}>
                                    {projectData[1].description}
                                </p>
                                {/* <a className={styles.viewMoreBtn} onClick={toggleFirstDescription}>
                                    {isFirstDescriptionExpanded ? <TbArrowBigUpLines/> : 'Ler mais'}
                                </a>  */}

                                <div className={styles.projectLinksWrapReverse}>
                                    <a className={styles.projectDeploy} href={projectData[1].deploy} target='_blank' rel='noopener noreferrer'>
                                        <IoEye/> <span>Deploy</span>
                                    </a>
                                    <a className={styles.githubIcon} href={projectData[1].github} target='_blank' rel='noopener noreferrer'>
                                        <FiGithub/> <span>GitHub</span>
                                    </a>
                                </div>
                            </motion.aside>
                            <motion.figure ref={refImg2} animate={inViewImg2 ? "show" : "hidden"} variants={variants} className={styles.projectImg}
                            >
                                <img src={projeto2} alt="imagem de capa do projeto" />
                            </motion.figure>
                        </section>
                        <section className={styles.projectsWrap}>
                            <motion.aside 
                                ref={ref3} 
                                animate={inView3 ? variants.show : variants.hidden} 
                                variants={variants} 
                                className={styles.project3}
                            >
                                <h4 className={styles.projectName}>{projectData[2].name}</h4>
                                <ul className={styles.projectStack}>
                                    {projectData[2].stack.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                                <p className={`${styles.projectDescription} ${isThirdDescriptionExpanded ? styles.expanded : ''}`}>
                                    {projectData[2].description}
                                </p>
                                <a className={styles.viewMoreBtn} onClick={toggleThirdDescription}>
                                    {isThirdDescriptionExpanded ? <TbArrowBigUpLines/> : 'Ler mais'}
                                </a>

                                <div className={styles.projectLinksWrap}>
                                    <a className={styles.projectDeploy} href={projectData[2].deploy} target='_blank' rel='noopener noreferrer'>
                                        <IoEye/> <span>Deploy</span>
                                    </a>
                                    <a className={styles.githubIcon} href={projectData[2].github} target='_blank' rel='noopener noreferrer'>
                                        <FiGithub/> <span>GitHub</span>
                                    </a>
                                </div>
                            </motion.aside>
                            <motion.figure ref={refImg3} animate={inViewImg3 ? "show" : "hidden"} variants={imgVariants} className={styles.projectImg}
                            >
                                <img src={projeto3} alt="imagem de capa do projeto" />
                            </motion.figure>
                        </section>

                        <section className={styles.projectsWrapReverse}>
                            <motion.aside 
                                ref={ref4} 
                                animate={inView4 ? imgVariants.show : imgVariants.hidden} 
                                variants={imgVariants} 
                                className={styles.project4}
                            >
                                <h4 className={styles.projectName}>{projectData[3].name}</h4>
                                <ul className={styles.projectStackReverse}>
                                    {projectData[3].stack.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                                <p className={`${styles.projectDescription} ${isFourthDescriptionExpanded ? styles.expanded : ''}`}>
                                    {projectData[3].description}
                                </p>
                                <a className={styles.viewMoreBtn} onClick={toggleFourthDescription}>
                                    {isFourthDescriptionExpanded ? <TbArrowBigUpLines/> : 'Ler mais'}
                                </a>

                                <div className={styles.projectLinksWrapReverse}>
                                    <a className={styles.projectDeploy} href={projectData[3].deploy} target='_blank' rel='noopener noreferrer'>
                                        <IoEye/> <span>Deploy</span>
                                    </a>
                                    <a className={styles.githubIcon} href={projectData[3].github} target='_blank' rel='noopener noreferrer'>
                                        <FiGithub/> <span>GitHub</span>
                                    </a>
                                </div>
                            </motion.aside>
                            <motion.figure ref={refImg4} animate={inViewImg4 ? "show" : "hidden"} variants={variants} className={styles.projectImg}
                            >
                                <img src={projeto4} alt="imagem de capa do projeto" />
                            </motion.figure>
                        </section>
                    </section>
            </motion.section>
        </>
    )
}

export default Projects;