import React from 'react';

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

export default function HeaderSocials(){
  return(
    <div className="header-socials">
      <a href="https://www.linkedin.com/in/nilo-marcos-freitas-126536193/" target="_blank"> <BsLinkedin /> </a>
      <a href="https://github.com/NiloMarcos" target="_blank"><BsGithub/> </a>
      <a href="https://www.instagram.com/nilomarcos_/" target="_blank"><BsInstagram /></a>
    </div>
  );
}