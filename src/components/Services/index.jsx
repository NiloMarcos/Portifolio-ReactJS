import React from 'react';

import './services.css';

import { BsCheck2Circle } from 'react-icons/bs';

export default function Services(){
  return(
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>

      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>Desenvolvimento Lading Pages</h3>
          </div>

          <ul className="service-list">
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* Fim do que ofereço */}

        <article className="service">
          <div className="service-head">
            <h3>Desenvolvimento de sites</h3>
          </div>

          <ul className="service-list">
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service-list">
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2Circle className="service-list-icon"/>
              <p>Loren, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}