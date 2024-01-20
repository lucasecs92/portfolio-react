import styles from '../css/Contact.module.css';
import { useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import ThemeContext from '../../contexts/ThemeContext';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Contact = () => {
    // Acessando o contexto de tema para aplicar estilos condicionais.
    const themeContext = useContext(ThemeContext);
    // Estado para gerenciar os valores do formulário.
    const [form, setForm] = useState({ name: '', email: '', msg: '' });
    // Hook para verificar se o componente está visível na viewport.
    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    // Função para atualizar o estado do formulário quando os campos são alterados.
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Função para lidar com a submissão do formulário e enviar a mensagem via emailjs.
    const handleSubmit = (e) => {
        e.preventDefault();

        // Envia o email usando os valores do estado do formulário.
        emailjs.send('gmailMessage', 'template_jomguns', form, '8E_x3kawgpjDNDHi4')
            .then(() => {
                alert('Mensagem enviada com sucesso! :)');
            }, (error) => {
                alert(error.message);
            });
            // Reseta o formulário após o submit.
            e.target.reset();
    };

    // Variantes de animação para a transição de entrada do componente.
    const fromBottomVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut" }
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