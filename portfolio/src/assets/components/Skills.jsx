import styles from '../css/Skills.module.css';

import { FaCss3Alt, FaGitAlt, FaHtml5, FaLinux, FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";

import ThemeContext from '../../contexts/ThemeContext';
import { useContext } from 'react';

import qrCode from '../images/qrcode-curriculum.png';

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

                <section className={styles.infoWrap}>
                    <aside className={styles.skillsInfo}>
                        <h4>O que eu posso fazer</h4>
                        <p>
                            Como desenvolvedor, tenho conhecimento em Javascript, React, HTML e CSS.
                            Minha breve experiência e objetivo com o uso dessa stack é para construção de aplicações responsivas, dinâmicas, escaláveis e de fácil manutenção. Me permitindo criar um código eficiente e sustentável que pode se adequar às necessidades de mudança de um negócio.
                        </p>
                    </aside>
                    <figure className={styles.qrCode}>
                        <img src={qrCode} alt="QR Code do meu currículo"/>
                        <aside>
                            <p>Meu</p>
                            <p>Curriculum</p>
                            <p>Vitae</p>
                        </aside>
                    </figure>
                </section>

            </section>
        </>
    )
}

export default Skills;