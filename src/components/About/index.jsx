import React from 'react';

import './about.css';

import Me from '../../assets/me.jpg';

import { FaAward } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';

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
              <small>15+</small>
            </article>
            
            <article className="about-card">
              <BiCodeAlt className="about-icon"/>
              <h5>Prototipos</h5>
              <small>2+</small>
            </article>
          </div>

          <p>
            Meu nome é Nilo Marcos. Sou um Front-end developer Jr, <br/> 
            e venho estudando sobre Ui/Ux Design. Desenvolvo interfaces<br/>
            modernas visando a melhor experiências de usuário.<br/>
            Concentrando em performance, animações e responsividade. <br/>
          </p>

          <a href="#contact" className="btn btn-primary">Contato</a>
        </div>
      </div>
    </section>
  );
}