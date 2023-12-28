import { useState, useEffect } from 'react';
import styles from '../css/NavBar.module.css';
import { PiMoonLight } from "react-icons/pi";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 710);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 710);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <section className={styles.containerNavBar}>
                <nav className={styles.navBarMain}>
                    <nav className={styles.navLeft}>
                        <h3>JustADev</h3>
                    </nav>
                    <nav className={styles.navRight}>
                        {isMobile ? (
                            <span className={styles.burgerIcon}>
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
        </>
    )
}

export default NavBar;