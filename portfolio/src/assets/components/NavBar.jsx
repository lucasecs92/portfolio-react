import { useState, useEffect, useContext } from 'react';
import styles from '../css/NavBar.module.css';
import { LuMoon, LuSun } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeContext from '../../contexts/ThemeContext';

import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

const NavBar = ({ homeRef, skillsRef, projectsRef, contactRef }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 975);
    const [showMenu, setShowMenu] = useState(false);
    const themeContext = useContext(ThemeContext);
    const [isDarkMode, setIsDarkMode] = useState(themeContext.theme === 'dark');

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        themeContext.setTheme(!isDarkMode ? 'dark' : 'light');
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 975);
        };
        window.addEventListener("resize", handleResize);

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setShowMenu(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    const scrollToRef = (ref) => {
        // Fecha o menu móvel se estiver aberto
        if (showMenu) {
            setShowMenu(false);
        }

        // Aguarda o fechamento do menu antes de rolar
        setTimeout(() => {
            if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };

    const menuVariants = {
        hidden: {
            x: '-100%', // Começa fora da tela
            opacity: 0,
            transition: {
                type: 'spring',
                stiffness: 120,
                damping: 20
            }
        },
        visible: {
            x: '0', // Termina na posição original
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 120,
                damping: 20
            }
        }
    };

    return (
        <>
            <section className={`${styles.containerNavBar} ${isDarkMode ? styles.darkMode : ''}`}>
                <nav className={styles.navBarMain}>
                    <nav className={styles.navLeft}>
                        <h3 className={`${isDarkMode ? styles.darkMode : ''}`}><span>Dev</span>Lucas</h3>
                    </nav>

                    <nav className={styles.navRight}>
                        {isMobile ? (
                            <span className={styles.burgerIcon} onClick={handleClick}>
                                <FaBars />
                            </span>
                        ) : (
                            <ul className={styles.navRightUl}>
                                <li>
                                    <a onClick={() => scrollToRef(homeRef)}>Home</a>
                                </li>
                                <li>
                                    <a onClick={() => scrollToRef(skillsRef)}>Skills</a>
                                </li>
                                <li>
                                    <a onClick={() => scrollToRef(projectsRef)}>Projetos</a>
                                </li>
                                <li>
                                    <a onClick={() => scrollToRef(contactRef)}>Contato</a>
                                </li>
                            </ul>
                        )}
                        <span className={styles.modeIcon} onClick={toggleDarkMode}>
                            {isDarkMode ? <LuSun /> : <LuMoon />}
                        </span>
                    </nav>
                </nav>
            </section>

            <AnimatePresence>
                {showMenu && (
                    <motion.div
                        className={styles.menuOverlay}
                        initial="hidden"
                        animate={showMenu ? "visible" : "hidden"}
                        exit="hidden"
                        variants={menuVariants}
                    >
                        <span className={styles.closeIcon} onClick={handleClick}>
                            <FaTimes />
                        </span>
                        <ul className={styles.menuList}>
                            <li>
                                <a onClick={() => scrollToRef(homeRef)}>Home</a>
                            </li>
                            <li>
                                <a onClick={() => scrollToRef(skillsRef)}>Skills</a>
                            </li>
                            <li>
                                <a onClick={() => scrollToRef(projectsRef)}>Projetos</a>
                            </li>
                            <li>
                                <a onClick={() => scrollToRef(contactRef)}>Contato</a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

NavBar.propTypes = {
    homeRef: PropTypes.oneOfType([
      PropTypes.func, 
      PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    skillsRef: PropTypes.oneOfType([
      PropTypes.func, 
      PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    projectsRef: PropTypes.oneOfType([
      PropTypes.func, 
      PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    contactRef: PropTypes.oneOfType([
      PropTypes.func, 
      PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
};

export default NavBar;