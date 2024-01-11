import styles from '../css/Skills.module.css';

import { FaCss3Alt, FaGitAlt, FaHtml5, FaLinux, FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";

import ThemeContext from '../../contexts/ThemeContext';
import { useContext } from 'react';

const Skills = () => {
    const themeContext = useContext(ThemeContext);

    return (    
        <>
            <section className={`${styles.containerSkills} ${themeContext.theme === 'dark' ? styles.darkMode : ''}`}>

                <section className={styles.title}>
                    <h2>Minhas Skills</h2>
                </section>

                <ul className={styles.techIcons}>
                    <li className={styles.techItems}>
                        <BiLogoJavascript/>
                    </li>
                    <li className={styles.techItems}>
                        <BiLogoTypescript/>
                    </li>
                    <li className={styles.techItems}>
                        <FaGitAlt/>
                    </li>
                    <li className={styles.techItems}>
                        <FaHtml5/>
                    </li>
                    <li className={styles.techItems}>
                        <FaCss3Alt/>
                    </li>
                    <li className={styles.techItems}>
                        <FaReact/>
                    </li>
                    <li className={styles.techItems}>
                        <FaLinux/>
                    </li>
                    <li className={styles.techItems}>
                        <TbBrandVscode/>
                    </li>
                </ul>

                <aside className={styles.skillsInfo}>
                    <h4>What I can do</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, officiis adipisci quod dignissimos libero nemo quisquam iure. Hic error eos ut odio, quia placeat. Repellendus non reiciendis omnis veritatis est.
                    lorem.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum reprehenderit quibusdam deleniti repellat. Iure, eveniet at non ducimus earum eum suscipit vitae assumenda praesentium. Beatae molestias asperiores laborum amet ut.
                    </p>
                </aside>
            </section>
        </>
    )
}

export default Skills;