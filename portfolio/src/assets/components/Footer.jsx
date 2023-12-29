import styles from '../css/Footer.module.css';

import { BiLogoLinkedin } from "react-icons/bi";
import { VscGithubAlt } from "react-icons/vsc";


const Footer = () => {

    return (
        <>
            <section className={styles.footer}>
                <div>
                    <p>Created by Lucas Eduardo C. De Sousa.</p>
                </div>
                <section className={styles.socialIcons}>
                    <a className={styles.socialItem} href="#"><BiLogoLinkedin/></a>
                    <a className={styles.socialItem} href="#"><VscGithubAlt/></a>
                </section>
            </section>
        </>
    )
}

export default Footer;