import styles from '../css/Contact.module.css';
import { useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import ThemeContext from '../../contexts/ThemeContext';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Contact = () => {
    const themeContext = useContext(ThemeContext);
    const [form, setForm] = useState({ name: '', email: '', msg: '' });
    const [ref, inView] = useInView({
        threshold: 0.1,
    });

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

    const fromBottomVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 2, ease: "easeOut" }
        }
    };

    return (
        <>
            <section className={`${styles.containerContact} ${themeContext.theme === 'dark' ? styles.darkMode : ''}`}>
                <motion.section 
                    className={styles.contactWrap}
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fromBottomVariants}
                >
                    <motion.h1 variants={fromBottomVariants}>MEU CONTATO</motion.h1>
                    <motion.h3 variants={fromBottomVariants}>Contate-me Aqui</motion.h3>
                    <form className={styles.contactForm} onSubmit={handleSubmit} autoComplete="off">
                    <motion.label htmlFor="nome" variants={fromBottomVariants}>Nome</motion.label>
                        <motion.input type="text" id="nome" name='name' placeholder='Digite seu nome' className={styles.inputs} onChange={handleChange} required variants={fromBottomVariants}/>

                        <motion.label htmlFor="email" variants={fromBottomVariants}>Email</motion.label>
                        <motion.input type="text" id="email" name='email' placeholder='Digite seu e-mail' className={styles.inputs} onChange={handleChange} required variants={fromBottomVariants}/>

                        <motion.label htmlFor="message" variants={fromBottomVariants}>Mensagem</motion.label>
                        <motion.textarea name="message" id="message" cols="30" rows="10" placeholder='Digite sua mensagem' onChange={handleChange} required variants={fromBottomVariants}></motion.textarea>
                      
                        <motion.input type="submit" className={styles.submit} value='Enviar Mensagem' variants={fromBottomVariants}/>
                    </form>
                </motion.section>
            </section>
        </>
    )
}

export default Contact;