import styles from '../css/Footer.module.css';

import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const Footer = () => {

    return (
        <>
            <section className={styles.containerFooter}>
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