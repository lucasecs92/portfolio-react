import styles from '../css/Skills.module.css';

import Tooltip from '@mui/material/Tooltip';

// Ícones
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNpm, FaReact, FaSass, FaUbuntu } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { SiCanva, SiGimp } from "react-icons/si";

// Importação do contexto de tema
import ThemeContext from '../../contexts/ThemeContext';
import { useContext } from 'react';

// Imagens
import qrCode from '../images/qrcode-curriculum.png';
import qrCodeDark from '../images/qrcode-darkmode.png';

// Importação do hook useInView para detectar quando um elemento está visível na tela
import { useInView } from 'react-intersection-observer';
// Importação da biblioteca framer-motion para adicionar animações ao componente
import { motion } from 'framer-motion';

const Skills = () => {
    // Uso do contexto de tema
    const themeContext = useContext(ThemeContext);

    // Definição dos refs e variáveis de estado para controlar a visibilidade dos elementos
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

    // Definição das variantes para as animações
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

                <section className={styles.skillsWrap}>
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
                        <Tooltip 
                            title="HTML5" 
                            placement='top' 
                            arrow
                        >
                            <li className={styles.techItems}>
                                <FaHtml5/>
                            </li>
                        </Tooltip>

                        <Tooltip 
                            title="CSS3" 
                            placement='top' 
                            arrow
                        >
                            <li className={styles.techItems}>
                                <FaCss3Alt/>
                            </li>
                        </Tooltip>
                        
                        <Tooltip
                            title="Git" 
                            placement='top' 
                            arrow
                        >
                            <li className={styles.techItems}>
                                <FaGitAlt/>
                            </li>
                        </Tooltip>
                        <Tooltip
                            title="JavaScript" 
                            placement='top' 
                            arrow
                        >
                            <li className={styles.techItems}>
                                <BiLogoJavascript/>
                            </li>
                        </Tooltip>
                        <Tooltip
                            title="TypeScript" 
                            placement='top' 
                            arrow
                        >
                            <li className={styles.techItems}>
                                <BiLogoTypescript/>
                            </li>
                        </Tooltip>
                        <Tooltip
                            title="React" 
                            placement='top' 
                            arrow
                        >
                            <li className={styles.techItems}>
                                <FaReact/>
                            </li>
                        </Tooltip>
                        <Tooltip
                            title="Sass" 
                            placement='top' 
                            arrow
                        >
                            <li className={styles.techItems}>
                                <FaSass/>
                            </li>
                        </Tooltip>
                        <Tooltip
                            title="Gimp" 
                            placement='top' 
                            arrow
                        >
                            <li className={styles.techItems}>
                                <SiGimp/>
                            </li>
                        </Tooltip>
                        <Tooltip
                            title="Ubuntu" 
                            placement='top' 
                            arrow
                        >
                            <li className={styles.techItems}>
                                <FaUbuntu/>
                            </li>
                        </Tooltip>
                        <Tooltip
                            title="Canva" 
                            placement='top' 
                            arrow
                        >
                            <li className={styles.techItems}>
                                <SiCanva />
                            </li>
                        </Tooltip>
                        <Tooltip
                            title="npm" 
                            placement='top' 
                            arrow
                        >
                            <li className={styles.techItems}>
                                <FaNpm />
                            </li>
                        </Tooltip>
                        <Tooltip
                            title="Visual Studio Code" 
                            placement='top' 
                            arrow
                        >
                            <li className={styles.techItems}>
                                <TbBrandVscode/>
                            </li>
                        </Tooltip>
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
                                Como desenvolvedor especializado, possuo uma sólida base em JavaScript, React, HTML e CSS. Meu objetivo é utilizar essa stack para criar aplicações web responsivas, dinâmicas, escaláveis e de fácil manutenção. Tenho a capacidade de gerar código eficiente e sustentável, adaptável às demandas em constante mudança de um negócio.
                            </p>
                        </motion.aside>
                        <motion.figure
                            className={styles.qrCode}
                            ref={qrCodeRef}
                            variants={qrCodeVariants}
                        >
                            <img src={themeContext.theme === 'dark' ? qrCodeDark : qrCode} alt="QR Code do meu currículo"/>
                            <aside>
                                <p>Meu</p>
                                <p>Curriculum</p>
                                <p>Vitae</p>
                            </aside>
                        </motion.figure>
                    </motion.section>
                </section>

            </section>
        </>
    )
}

export default Skills;