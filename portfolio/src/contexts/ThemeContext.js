import { createContext } from 'react';

const ThemeContext = createContext({
    theme: 'light', // valor padrão
    setTheme: (theme) => {
      localStorage.setItem('theme', theme);
    }
});

export default ThemeContext;