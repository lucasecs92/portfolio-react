import styles from '../css/Footer.module.css';
import { useContext } from 'react';

import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import ThemeContext from '../../contexts/ThemeContext';
import Policy from './Policy';

const Footer = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <>
            <section className={`${styles.containerFooter} ${themeContext.theme === 'dark' ? styles.darkMode : ''}`}>

                <section className={styles.footerWrap}>

                    <section className={styles.footerLeft}>
                        <Policy/>
                        <p><span className={styles.spanPipe}>|</span> Created by <span>Lucas Eduardo</span>.</p>
                    </section>
                    
                    <section className={styles.socialIcons}>
                        <a className={styles.socialItem} href="https://www.linkedin.com/in/lucasecs/" target='_blank' rel='noopener noreferrer'><BiLogoLinkedin/></a>
                        <a className={styles.socialItem} href="https://github.com/lucasecs92" target='_blank' rel='noopener noreferrer'><FiGithub/></a>
                    </section>
                    
                </section>
            </section>
        </>
    )
}

export default Footer;