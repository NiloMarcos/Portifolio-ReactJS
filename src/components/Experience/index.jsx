import React from 'react';

import './experience.css';

import { BsPatchCheckFill } from 'react-icons/bs';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiMysql } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';

export default function Experience(){
  return(
    <section id="experience" className="container-wrapper">
      <h5>Skills</h5>
      <h2>Conhecimentos</h2>

      <div className="experience-container container">
        <div className="experience-frontend">
          <h3>Front-end Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <AiFillHtml5 className="experience-details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Avançado</small>
              </div>
            </article>
            <article className="experience-details">
              <DiCss3 className="experience-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediario</small>
              </div>
            </article>
            <article className="experience-details">
              <SiJavascript className="experience-details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Basico/Intermediario</small>
              </div>
            </article>
            <article className="experience-details">
              <FaReact className="experience-details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Intermediario</small>
              </div>
            </article>
            <article className="experience-details">
              <FaReact className="experience-details-icon" />
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
              <FaNodeJs className="experience-details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Basico</small>
              </div>
            </article>
            <article className="experience-details">
              <SiFirebase className="experience-details-icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Basico</small>
              </div>
            </article>
            <article className="experience-details">
              <DiMysql className="experience-details-icon" />
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