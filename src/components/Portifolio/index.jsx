import React from 'react';

import './portifolio.css';

import Project from '../../assets/Rectangle.png';

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
          <h3>Em breve...</h3>
          <h5 className="coffe-link">Pegue um cafezinho, que já estou preparando o projeto.</h5>
        </article>
        
        <article className="portifolio-item">
          <div className="portifolio-item-img">
            <img src={Project} alt="Imagem do projeto" />
          </div>
          <h3>Em breve...</h3>
          <h5 className="coffe-link">Pegue um cafezinho, que já estou preparando o projeto.</h5>
        </article>
        
        <article className="portifolio-item">
          <div className="portifolio-item-img">
            <img src={Project} alt="Imagem do projeto" />
          </div>
          <h3>Em breve...</h3>
          <h5 className="coffe-link">Pegue um cafezinho, que já estou preparando o projeto.</h5>
        </article>
        
        <article className="portifolio-item">
          <div className="portifolio-item-img">
            <img src={Project} alt="Imagem do projeto" />
          </div>
          <h3>Em breve...</h3>
          <h5 className="coffe-link">Pegue um cafezinho, que já estou preparando o projeto.</h5>
        </article>
        
        <article className="portifolio-item">
          <div className="portifolio-item-img">
            <img src={Project} alt="Imagem do projeto" />
          </div>
          <h3>Em breve...</h3>
          <h5 className="coffe-link">Pegue um cafezinho, que já estou preparando o projeto.</h5>
        </article>
        
        <article className="portifolio-item">
          <div className="portifolio-item-img">
            <img src={Project} alt="Imagem do projeto" />
          </div>
          <h3>Em breve...</h3>
          <h5 className="coffe-link">Pegue um cafezinho, que já estou preparando o projeto.</h5>
        </article>
      </div>

      <h5 className="link-repos">
        <a href="https://github.com/NiloMarcos" target="_blank">Repositórios no GitHub</a>
      </h5>
    </section>
  );
}