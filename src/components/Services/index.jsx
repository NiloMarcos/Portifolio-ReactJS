import React from 'react';

import './services.css';

import { BsCheck2Circle } from 'react-icons/bs';

export default function Services(){
  return(
    <section id="services">
      <h5>Services</h5>
      <h2>Serviços</h2>

      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>Desenvolvimento</h3>
          </div>

          <ul className="service-list">
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>
                Desenvolvimento de Landing Pages, Portifólios, blog's e afins</p>
            </li>
          </ul>
        </article>

        {/* Fim do que ofereço */}

        <article className="service">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service-list">
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Desenvolvimetno de interface</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}