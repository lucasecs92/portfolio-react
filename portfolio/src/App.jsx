import styles from './assets/css/App.module.css';
import './assets/css/global.module.css'

import NavBar from './assets/components/NavBar';
import Mainpage from './assets/components/Mainpage';
import Footer from './assets/components/Footer';

function App() {

  return (
    <>
      <section className={styles.containerPortfolio}>
          <header>
            <NavBar/>
          </header>
          <main>
            <Mainpage/>
          </main>
          <footer>
            <Footer/>
          </footer>
      </section>
    </>
  )
}

export default App;
