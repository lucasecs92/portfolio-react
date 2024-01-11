import styles from './assets/css/App.module.css';
import './assets/css/global.module.css'

import NavBar from './assets/components/NavBar';
import Home from './assets/components/Home';
import Skills from './assets/components/Skills';
import Projects from './assets/components/Projects';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';

import { useEffect, useRef, useState } from 'react';
import ThemeContext from './contexts/ThemeContext';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
          <section className={styles.containerPortfolio}>
              <header>
                 <NavBar homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
              </header>
              <main>
                <div ref={homeRef}><Home /></div>
                <div ref={skillsRef}><Skills/></div>
                <div ref={projectsRef}><Projects/></div>
                <div ref={contactRef}><Contact/></div>
              </main>
              <footer>
                 <Footer/>
              </footer>
          </section>
      </ThemeContext.Provider>
  );
}

export default App;
