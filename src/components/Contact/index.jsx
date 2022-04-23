import React, { useRef } from 'react';

import './contact.css';

import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { BsMessenger } from 'react-icons/bs';

import emailjs from 'emailjs-com';

export default function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c0doxtr', 'template_1hjkj5o', form.current, 'd-9mV4jdtRyOu6gWk');

    e.target.reset()
  }


  return(
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-img" />
            <h4>Email</h4>
            <h5>nilo.n2m15@gmail.com</h5>
            <a href="mailto:nilo.n2m15@gmail.com" target="_blank">Envie um email</a>
          </article>
          
          <article className="contact-option">
            <BsWhatsapp className="contact-option-img" />
            <h4>WhatsApp</h4>
            <h5>(11) 95230-9205</h5>
            <a href="https://api.whatsapp.com/send?phone=11952309205" target="_blank">Envie um email</a>
          </article>
          
          <article className="contact-option">
            <BsMessenger className="contact-option-img" />
            <h4>Messenger</h4>
            <h5>Nilo Marcos</h5>
            <a href="https://m.me/nilo.marcos.3/" target="_blank">Envie uma mesagem</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="7" placeholder="Mensagem" required></textarea>
          <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}