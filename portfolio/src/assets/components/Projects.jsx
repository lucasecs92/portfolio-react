import styles from '../css/Projects.module.css';

import ThemeContext from '../../contexts/ThemeContext';

import projeto1 from '../images/bookstore.png';
import projeto2 from '../images/print-jujutsu.png';
import projeto3 from '../images/print-jujutsu.png';


const Projects = () => {

    return (
        <>
            <section className={`${styles.containerProjects} ${ThemeContext.theme === 'dark' ? styles.darkMode : ''}`}>

                    <section className={styles.title}>
                        <h3>Projects</h3>
                    </section>

                    <section className={styles.projects}>
                        <section className={styles.projectsWrap}>
                            <aside className={styles.project1}>
                                <h4 className={styles.projectName}>Book Store</h4>
                                <p className={styles.projectDescription}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia fugiat est consectetur aliquam eligendi qui provident esse, laudantium repellendus dicta commodi ut nihil quasi, repellat quaerat, temporibus sed corrupti!
                                </p>
                                <a className={styles.projectBtn} href="https://book-store-rho-ten.vercel.app/" target='_blank' rel='noopener noreferrer'>
                                    Visit Website
                                </a>
                            </aside>
                            <figure className={styles.projectImg}>
                                <img src={projeto1} alt="imagem de capa do bookstore" />
                            </figure>
                        </section>

                        <section className={styles.projectsWrapReverse}>
                            <aside className={styles.project2}>
                                <h4 className={styles.projectName}>Project Name</h4>
                                <p className={styles.projectDescription}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia fugiat est consectetur aliquam eligendi qui provident esse, laudantium repellendus dicta commodi ut nihil quasi, repellat quaerat, temporibus sed corrupti!
                                </p>
                                <a className={styles.projectBtn} href="#">
                                    Visit Website
                                </a>
                            </aside>
                            <figure className={styles.projectImg}>
                                <img src={projeto2} alt="imagem de capa do projeto" />
                            </figure>
                        </section>

                        <section className={styles.projectsWrap}>
                            <aside className={styles.project3}>
                                <h4 className={styles.projectName}>Project Name</h4>
                                <p className={styles.projectDescription}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia fugiat est consectetur aliquam eligendi qui provident esse, laudantium repellendus dicta commodi ut nihil quasi, repellat quaerat, temporibus sed corrupti!
                                </p>
                                <a className={styles.projectBtn} href="#">
                                    Visit Website
                                </a>
                            
                            </aside>
                            <figure className={styles.projectImg}>
                                <img src={projeto3} alt="imagem de capa do projeto" />
                            </figure>
                        </section>
                        
                    </section>
            </section>
        </>
    )
}

export default Projects;