import styles from '../css/Skills.module.css';

import { FaCss3Alt, FaGitAlt, FaHtml5, FaLinux, FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";

import ThemeContext from '../../contexts/ThemeContext';
import { useContext } from 'react';

import qrCode from '../images/qrcode-curriculum.png';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Skills = () => {
    const themeContext = useContext(ThemeContext);

    const [titleRef, titleInView] = useInView({ 
        threshold: 0.1 
    });
    const [techIconsRef, techIconsInView] = useInView({      
        threshold: 0.1 
    });

    const [skillsInfoRef, skillsInfoInView] = useInView({
        threshold: 0.1
    });
    const [qrCodeRef, qrCodeInView] = useInView({
        threshold: 0.1
    });

    const titleVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut" }
        }
    };
    
    const techIconsVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut", staggerChildren: 0.1 }
        }
    };

    const skillsInfoVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut" }
        }
    };
    
    const qrCodeVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut" }
        }
    };

    return (    
        <>
            <section className={`${styles.containerSkills} ${themeContext.theme === 'dark' ? styles.darkMode : ''}`}>

                <motion.section 
                    className={styles.title}
                    ref={titleRef}
                    initial="hidden"
                    animate={titleInView ? "visible" : "hidden"}
                    variants={titleVariants}
                >      
                    <h2>MINHAS SKILLS</h2>
                </motion.section>

                <motion.ul               
                    className={styles.techIcons}
                    ref={techIconsRef}
                    initial="hidden"
                    animate={techIconsInView ? "visible" : "hidden"}
                    variants={techIconsVariants}
                >
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
                </motion.ul>

                <motion.section 
                    className={styles.infoWrap}
                    initial="hidden"
                    animate={skillsInfoInView && qrCodeInView ? "visible" : "hidden"}
                >
                    <motion.aside 
                        className={styles.skillsInfo}
                        ref={skillsInfoRef}
                        variants={skillsInfoVariants}
                    >
                        <h4>O que eu posso fazer</h4>
                        <p>
                            Como desenvolvedor, tenho conhecimento em Javascript, React, HTML e CSS.
                            Minha breve experiência e objetivo com o uso dessa stack é para construção de aplicações responsivas, dinâmicas, escaláveis e de fácil manutenção. Me permitindo criar um código eficiente e sustentável que pode se adequar às necessidades de mudança de um negócio.
                        </p>
                    </motion.aside>
                    <motion.figure 
                        className={styles.qrCode}
                        ref={qrCodeRef}
                        variants={qrCodeVariants}
                    >
                        <img src={qrCode} alt="QR Code do meu currículo"/>
                        <aside>
                            <p>Meu</p>
                            <p>Curriculum</p>
                            <p>Vitae</p>
                        </aside>
                    </motion.figure>
                </motion.section>

            </section>
        </>
    )
}

export default Skills;