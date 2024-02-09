import styles from './assets/css/App.module.css';
import './assets/css/global.module.css'

import NavBar from './assets/components/NavBar';
import Home from './assets/components/Home';
import Skills from './assets/components/Skills';
import Projects from './assets/components/Projects';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';

// Importando hooks do React
import { useEffect, useRef, useState } from 'react';
// Importando o contexto de tema
import ThemeContext from './contexts/ThemeContext';
// import Policy from './assets/components/Policy';

function App() {
  // Inicializando o estado do tema com o valor armazenado no localStorage ou 'light' se nada estiver definido
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Usando o hook useEffect para salvar o tema atual no localStorage sempre que o tema muda
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    // Provedor de contexto para ThemeContext, permitindo que outros componentes acessem e alterem o tema
      <ThemeContext.Provider value={{ theme, setTheme }}>
          <section className={styles.containerPortfolio}>
              <header>
                 <NavBar homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
              </header>
              <main>
                <div ref={homeRef}><Home/></div>
                <div ref={skillsRef}><Skills/></div>
                <div ref={projectsRef}><Projects/></div>
                <div ref={contactRef}><Contact/></div>
                
                {/* <Policy/> */}
              </main>
              <footer>
                 <Footer/>
              </footer>
          </section>
      </ThemeContext.Provider>
  );
}

export default App;
