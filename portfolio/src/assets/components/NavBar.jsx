import { useState, useEffect, useContext } from 'react';
import styles from '../css/NavBar.module.css';
import { LuMoon, LuSun } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeContext from '../../contexts/ThemeContext';

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 710);
    const [showMenu, setShowMenu] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const themeContext = useContext(ThemeContext);

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

    return (
        <>
            <section className={`${styles.containerNavBar} ${isDarkMode ? styles.darkMode : ''}`}>
                <nav className={styles.navBarMain}>
                    <nav className={styles.navLeft}>
                        <h3 className={`${isDarkMode ? styles.darkMode : ''}`}>JustADev</h3>
                    </nav>

                    <nav className={styles.navRight}>
                        {isMobile ? (
                            <span className={styles.burgerIcon} onClick={handleClick}>
                                <FaBars />
                            </span>
                        ) : (
                            <ul className={styles.navRightUl}>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Projetos</a>
                                </li>
                                <li>
                                    <a href="#">Contato</a>
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
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Projetos</a>
                        </li>
                        <li>
                            <a href="#">Contato</a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default NavBar;