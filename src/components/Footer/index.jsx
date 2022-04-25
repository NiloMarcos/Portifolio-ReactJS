import React from "react";

import "./footer.css";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import Banner from '../../assets/bannerFooter.svg';

export default function Footer() {
  return (
    <footer>
      <section className="img-banner">
        <img src={Banner} alt="Imagem banner footer" />
      </section>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">Sobre mim</a>
        </li>
        <li>
          <a href="#experience">Conhecimentos</a>
        </li>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#portifolio">Portifólio</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.facebook.com/nilo.marcos.3/" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/nilomarcos_/" target="_blank">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/nilo-marcos-freitas-126536193/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/NiloMarcos" target="_blank">
          <BsGithub />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Nilo Marcos - Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}
