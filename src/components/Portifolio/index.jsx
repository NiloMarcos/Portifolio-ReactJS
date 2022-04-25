import React from 'react';

import './portifolio.css';

import Project from '../../assets/project.png';

export default function Portifolio(){
  return(
    <section id="portifolio">
      <h5>Projects</h5>
      <h2>Portifólio</h2>

      <div className="container portifolio-container">
        <article className="portifolio-item">
          <div className="portifolio-item-img">
            <img src={Project} alt="Imagem do projeto" />
          </div>
          <h3>This is a portifolio item title</h3>
          <a href="https://github.com" className="btn">GitHub</a>
        </article>
        
        <article className="portifolio-item">
          <div className="portifolio-item-img">
            <img src={Project} alt="Imagem do projeto" />
          </div>
          <h3>This is a portifolio item title</h3>
          <a href="https://github.com" className="btn">GitHub</a>
        </article>
        
        <article className="portifolio-item">
          <div className="portifolio-item-img">
            <img src={Project} alt="Imagem do projeto" />
          </div>
          <h3>This is a portifolio item title</h3>
          <a href="https://github.com" className="btn">GitHub</a>
        </article>
        
        <article className="portifolio-item">
          <div className="portifolio-item-img">
            <img src={Project} alt="Imagem do projeto" />
          </div>
          <h3>This is a portifolio item title</h3>
          <a href="https://github.com" className="btn">GitHub</a>
        </article>
        
        <article className="portifolio-item">
          <div className="portifolio-item-img">
            <img src={Project} alt="Imagem do projeto" />
          </div>
          <h3>This is a portifolio item title</h3>
          <a href="https://github.com" className="btn">GitHub</a>
        </article>
        
        <article className="portifolio-item">
          <div className="portifolio-item-img">
            <img src={Project} alt="Imagem do projeto" />
          </div>
          <h3>This is a portifolio item title</h3>
          <a href="https://github.com" className="btn">GitHub</a>
        </article>
      </div>
    </section>
  );
}