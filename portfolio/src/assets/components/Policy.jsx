import styles from '../css/Policy.module.css';

import { MdOutlinePrivacyTip } from "react-icons/md"

const Policy = () => {

    return (
        <>
            <section className={styles.privacidade}>
                <a href="https://www.iubenda.com/privacy-policy/50506132" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" title="Política de Privacidade" target="_blank" rel="noopener noreferrer">
                <MdOutlinePrivacyTip />
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