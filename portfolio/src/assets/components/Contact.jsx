import { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../css/Contact.module.css';

const Contact = () => {
    const [form, setForm] = useState({ nname: '', nemail: '', nmsg: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('gmailMessage', 'template_jomguns', form, '8E_x3kawgpjDNDHi4')
            .then(() => {
                alert('Mensagem enviada com sucesso! :)');
            }, (error) => {
                alert(error.message);
            });
            e.target.reset();
    };

    return (
        <>
            <section className={styles.containerContact}>
                <section className={styles.contactWrap}>
                    <h1>MEU CONTATO</h1>
                    <h3>Contate-me Aqui</h3>
                    <form className={styles.contactForm} onSubmit={handleSubmit} autoComplete="off">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" name='name' placeholder='Digite seu nome' className={styles.inputs} onChange={handleChange} required/>

                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name='email' placeholder='Digite seu e-mail' className={styles.inputs} onChange={handleChange} required/>

                        <label htmlFor="message">Mensagem</label>
                        <textarea name="message" id="message" cols="30" rows="10"  placeholder='Digite sua mensagem' onChange={handleChange} required></textarea>

                        <input type="submit" className={styles.submit} value='Enviar Mensagem'/>
                    </form>
                </section>
            </section>
        </>
    )
}

export default Contact;