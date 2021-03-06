import React from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Hero from './Hero';
import Projects from './Projects';

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
