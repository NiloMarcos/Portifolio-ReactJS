import React from 'react';

import './header.css';

import CTA from './CTA';

import Me from '../../assets/undraw_product_explainer_3hnc.svg';

import HeaderSocial from './HeaderSocials';

export default function Header(){
  return(
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Nilo Marcos</h1>
        <h5 className="text-light">Desenvolvedor Front-end Jr.</h5>
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