import { useEffect } from 'react';
import 'lenis/dist/lenis.css';

import Curtain from './components/Curtain';
import Header from './components/Header';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import Spine from './components/Spine';
import Hero from './sections/Hero';
import Work from './sections/Work';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';
import useReveal from './hooks/useReveal';
import { startMotion } from './motion/motion';

export default function App() {
  useReveal();
  useEffect(() => startMotion(), []);

  return (
    <>
      <Curtain />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Spine />
        <Hero />
        <Marquee />
        <Work />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
