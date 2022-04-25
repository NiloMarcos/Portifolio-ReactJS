import React from 'react';

import './about.css';

import Me from '../../assets/me.jpg';
import { FaAward } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';

export default function About(){
  return(
    <section id="about">
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/>
            when an unknown printer took a galley of type and scrambled it to make a type<br/>
            specimen book. It has survived not only five centuries. <br/>
          </p>

          <a href="#contact" className="btn btn-primary">Contato</a>
        </div>
      </div>
    </section>
  );
}