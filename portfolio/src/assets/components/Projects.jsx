import styles from '../css/Projects.module.css';

import ThemeContext from '../../contexts/ThemeContext';

import projeto1 from '../images/bookstore.png';
import projeto2 from '../images/weather.png';
import projeto3 from '../images/todolist.png';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useContext } from 'react';

import { FiGithub } from "react-icons/fi";

const Projects = () => {

    const themeContext = useContext(ThemeContext);

    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();

    const [refImg1, inViewImg1] = useInView();
    const [refImg2, inViewImg2] = useInView();
    const [refImg3, inViewImg3] = useInView();

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
            <section className={`${styles.containerProjects} ${themeContext.theme === 'dark' ? styles.darkMode : ''}`}>

                    <section className={styles.projectHeader}>
                            <h4>MEUS PROJETOS</h4>
                            <h2>O que eu desenvolvi</h2>
                    </section>

                    <section className={styles.projects}>
                            <section className={styles.projectsWrap}>
                                <motion.aside ref={ref1} animate={inView1 ? variants.show : variants.hidden} variants={variants} className={styles.project1}>
                                    <h4 className={styles.projectName}>Book Store</h4>
                                    <ul className={styles.projectStack}>
                                        <li>React</li>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                    </ul>
                                    <p className={styles.projectDescription}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia fugiat est consectetur aliquam eligendi qui provident esse, laudantium repellendus dicta commodi ut nihil quasi, repellat quaerat, temporibus sed corrupti!
                                    </p>

                                    <div className={styles.projectLinksWrap}>
                                        <a className={styles.projectBtn} href="https://book-store-rho-ten.vercel.app/" target='_blank' rel='noopener noreferrer'>
                                            Visualizar Website
                                        </a>
                                        <a href="https://github.com/lucasecs92/book-store-react/tree/main/book-store" target="_blank" rel="noopener noreferrer" className={styles.githubIcon}><FiGithub/></a>
                                    </div>
                                </motion.aside>
                                <motion.figure ref={refImg1} animate={inViewImg1 ? "show" : "hidden"} variants={imgVariants} className={styles.projectImg}>
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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia fugiat est consectetur aliquam eligendi qui provident esse, laudantium repellendus dicta commodi ut nihil quasi, repellat quaerat, temporibus sed corrupti!
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
                                    <p className={styles.projectDescription}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia fugiat est consectetur aliquam eligendi qui provident esse, laudantium repellendus dicta commodi ut nihil quasi, repellat quaerat, temporibus sed corrupti!
                                    </p>

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
            </section>
        </>
    )
}

export default Projects;