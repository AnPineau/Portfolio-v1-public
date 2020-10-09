import React, { useRef } from "react";
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import '../styles/style.scss';

const IndexPage = () => {

  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  function scrollTo(name){
    let el;
    switch (name) {
      case 'Home': el = homeRef.current; break;
      case 'About': el = aboutRef.current; break;
      case 'Projects': el = projectsRef.current; break;
      case 'Contact': el = contactRef.current; break;
      default: el = homeRef.current; break;
    }
    el.scrollIntoView({ behavior: 'smooth' });
  }



  // TODO: header behavior



  return (
    <div className="App">
      <Header scrollTo={scrollTo} />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );

}

export default IndexPage;
