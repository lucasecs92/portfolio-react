import { useState, useEffect, useContext } from 'react';
import styles from '../css/NavBar.module.css';
import { LuMoon, LuSun } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeContext from '../../contexts/ThemeContext';

import PropTypes from 'prop-types';

const NavBar = ({ homeRef, skillsRef, projectsRef, contactRef }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 710);
    const [showMenu, setShowMenu] = useState(false);
    const themeContext = useContext(ThemeContext);
    const [isDarkMode, setIsDarkMode] = useState(themeContext.theme === 'dark');

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        themeContext.setTheme(!isDarkMode ? 'dark' : 'light');
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 710);
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

    return (
        <>
            <section className={`${styles.containerNavBar} ${isDarkMode ? styles.darkMode : ''}`}>
                <nav className={styles.navBarMain}>
                    <nav className={styles.navLeft}>
                        <h3 className={`${isDarkMode ? styles.darkMode : ''}`}>DevLucas</h3>
                    </nav>

                    <nav className={styles.navRight}>
                        {isMobile ? (
                            <span className={styles.burgerIcon} onClick={handleClick}>
                                <FaBars />
                            </span>
                        ) : (
                            <ul className={styles.navRightUl}>
                                <li>
                                    <a href="#" onClick={() => scrollToRef(homeRef)}>Home</a>
                                </li>
                                <li>
                                    <a href="#" onClick={() => scrollToRef(skillsRef)}>Skills</a>
                                </li>
                                <li>
                                    <a href="#" onClick={() => scrollToRef(projectsRef)}>Projetos</a>
                                </li>
                                <li>
                                    <a href="#" onClick={() => scrollToRef(contactRef)}>Contato</a>
                                </li>
                            </ul>
                        )}
                        <span className={styles.modeIcon} onClick={toggleDarkMode}>
                            {isDarkMode ? <LuSun /> : <LuMoon />}
                        </span>
                    </nav>
                </nav>
            </section>

            {showMenu && (
                <div className={styles.menuOverlay}>
                    <span className={styles.closeIcon} onClick={handleClick}>
                        <FaTimes />
                    </span>
                    <ul className={styles.menuList}>
                        <li>
                            <a href="#" onClick={() => scrollToRef(homeRef)}>Home</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => scrollToRef(skillsRef)}>Skills</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => scrollToRef(projectsRef)}>Projetos</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => scrollToRef(contactRef)}>Contato</a>
                        </li>
                    </ul>
                </div>
            )}
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