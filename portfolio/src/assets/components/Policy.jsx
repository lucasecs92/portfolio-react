import { useContext } from 'react';

import { MdOutlinePrivacyTip } from "react-icons/md"

import ThemeContext from '../../contexts/ThemeContext';

const Policy = () => {

    const themeContext = useContext(ThemeContext);
    const isDarkMode = themeContext.theme === 'dark';

    return (
        <>
            <section style={{
                position: 'fixed',
                bottom: '30px',
                left: '25px',
                zIndex:  1000,
                fontSize: '2rem',
            }}>
                <a href="https://www.iubenda.com/privacy-policy/50506132" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" title="Política de Privacidade" target="_blank" rel="noopener noreferrer">
                <MdOutlinePrivacyTip style={{ color: isDarkMode ? 'var(--lightMode)' : 'var(--darkMode)' }}/>
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