import styles from '../css/Mainpage.module.css';
import Contact from './Contact';
import Home from './Home';
import Skills from './Skills';

const Mainpage = () => {

    return (
        <>
            <section className={styles.containerMainpage}>
                <Home/>
                <Skills/>

                <Contact/>
            </section>
        </>
    )
}

export default Mainpage;