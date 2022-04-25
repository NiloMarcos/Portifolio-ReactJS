import React from 'react';

import './experience.css';

import { BsPatchCheckFill } from 'react-icons/bs';

export default function Experience(){
  return(
    <section id="experience">
      <h5>Skills</h5>
      <h2>Conhecimentos</h2>

      <div className="experience-container container">
        <div className="experience-frontend">
          <h3>Front-end Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Avançado</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediario</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Basico/Intermediario</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Intermediario</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Intermediario</small>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience-backend">
          <h3>Back-end Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Basico</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Basico</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}