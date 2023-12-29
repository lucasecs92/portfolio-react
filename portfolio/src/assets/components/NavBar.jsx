import { useState, useEffect } from 'react';
import styles from '../css/NavBar.module.css';
import { PiMoonLight } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 710);
    const [showMenu, setShowMenu] = useState(false);

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
            <section className={styles.containerNavBar}>
                <nav className={styles.navBarMain}>
                    <nav className={styles.navLeft}>
                        <h3>JustADev</h3>
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
                        <span className={styles.modeIcon}>
                            <PiMoonLight/>
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