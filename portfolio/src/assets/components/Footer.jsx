import styles from '../css/Footer.module.css';

import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import ThemeContext from '../../contexts/ThemeContext';
import { useContext } from 'react';

const Footer = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <>
            <section className={`${styles.containerFooter} ${themeContext.theme === 'dark' ? styles.darkMode : ''}`}>
                <section className={styles.footerInfo}>
                    <p>Created by Lucas Eduardo C. De Sousa.</p>
                </section>
                <section className={styles.socialIcons}>
                    <a className={styles.socialItem} href="#"><BiLogoLinkedin/></a>
                    <a className={styles.socialItem} href="#"><FiGithub/></a>
                </section>
            </section>
        </>
    )
}

export default Footer;