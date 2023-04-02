import React from 'react';

import Me from '../../assets/me.jpg';

import { FaAward } from 'react-icons/fa';

import { BiCodeAlt } from 'react-icons/bi';

import './about.css';

import Typical from 'react-typical';

export default function About(){
  return(
    <section id="about" className="container-wrapper">
      <h5>About Me</h5>
      <h2>Sobre mim</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={Me} alt="Minha Foto" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon"/>
              <h5>Experiência</h5>
              <small>2 anos</small>
            </article>
          
            <article className="about-card">
              <BiCodeAlt className="about-icon"/>
              <h5>Projetos</h5>
              <small>+30</small>
            </article>
            
            <article className="about-card">
              <BiCodeAlt className="about-icon"/>
              <h5>Prototipos</h5>
              <small>+5</small>
            </article>
          </div>

          <p>
            Sou um Desenvolvedor Front-end Jr, apaixonado por tecnologia, cativado pela área de desenvolvimento front-end, venho me aprimorando mais em Desenvolvimento Web & Mobile.
            Desenvolvo interfaces modernas visando a melhor experiências de usuário. Concentrando em performance, animações e responsividade.
          </p>

          <a href="#contact" className="btn-about-me">Contato</a>
        </div>
      </div>
    </section>
  );
}