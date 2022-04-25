import React from 'react';

import CV from '../../assets/Nilo Marcos (1).pdf'

export default function CTA(){
  return(
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Contato</a>
    </div>
  );
}