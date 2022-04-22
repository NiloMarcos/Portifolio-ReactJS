import React from 'react';

import Header from '../../components/Header';
import Nav from '../../components/Nav';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Services from '../../components/Services';
import Portifolio from '../../components/Portifolio';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Home(){
  return(
    <main>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portifolio />
      <Contact />
      <Footer />
    </main>
  );
}