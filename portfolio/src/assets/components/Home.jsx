import styles from '../css/Home.module.css';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {

    return (
        <>
            <section className={styles.containerHome}>
                
                <Skills/>

                <Contact/>
            </section>
        </>
    )
}

export default Home;