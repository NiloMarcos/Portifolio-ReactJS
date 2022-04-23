import React from "react";

import "./footer.css";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Nilo - Dev Front-end Jr.
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portifolio">portifolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
