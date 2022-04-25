import React from 'react';

import './header.css';

import CTA from './CTA';

import Me from '../../assets/undraw_product_explainer_3hnc.svg';

import HeaderSocial from './HeaderSocials';

import Typical from 'react-typical';

export default function Header(){
  return(
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h2>Nilo Marcos De Freitas</h2>
        <Typical
          steps={[
            'Desenvolvedor Front-end Jr.', 1000, 
            'Estudante de UI/UX Design.', 1000]}
          loop={Infinity}
          wrapper="p"
          className="text-light"
        />
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={Me} alt="Minha foto" />
        </div>

        <a href="#about" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  );
}