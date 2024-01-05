import styles from './assets/css/App.module.css';
import './assets/css/global.module.css'

import NavBar from './assets/components/NavBar';
import Home from './assets/components/Home';
import Skills from './assets/components/Skills';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';

import { useState } from 'react';
import ThemeContext from './contexts/ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');

  return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
          <section className={styles.containerPortfolio}>
              <header>
                 <NavBar/>
              </header>
              <main>
                 <Home />
                 <Skills/>
                 <Contact/>
              </main>
              <footer>
                 <Footer/>
              </footer>
          </section>
      </ThemeContext.Provider>
  );
}

export default App;
