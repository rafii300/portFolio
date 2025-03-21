
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Certificates from './Certificates';

const Index: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
    </MainLayout>
  );
};

export default Index;
