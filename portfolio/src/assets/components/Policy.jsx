import { useContext, useState } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

import styles from '../css/Policy.module.css';

const Policy = () => {

    const themeContext = useContext(ThemeContext);
    const isDarkMode = themeContext.theme === 'dark';
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const anchorStyle = {
        color: isDarkMode ? 'var(--light)' : 'var(--dark)',
        textDecoration: 'none',
        position: 'relative', // Adicionado para posicionar o pseudo-elemento
    };

    const hoverStyle = {
        // color: 'red',
        textDecoration: 'underline',
    };
    

    return (
        <>
            <section className={styles.containerPolicy}>
                <a 
                    href="https://www.iubenda.com/privacy-policy/50506132" 
                    className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" 
                    title="Política de Privacidade" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={isHovered ? {...anchorStyle, ...hoverStyle} : anchorStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Políticas de Privacidade
                </a>
                <div dangerouslySetInnerHTML={{ __html: `
                    <script type="text/javascript">
                        (function (w, d) {
                        var loader = function () {
                            var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
                            s.src = "https://cdn.iubenda.com/iubenda.js";
                            tag.parentNode.insertBefore(s, tag);
                        };
                        if (w.addEventListener) {
                            w.addEventListener("load", loader, false);
                        } else if (w.attachEvent) {
                            w.attachEvent("onload", loader);
                        } else {
                            w.onload = loader;
                        }
                        })(window, document);
                    </script>
                ` }} />
            </section>
        </>
    )
}

export default Policy;