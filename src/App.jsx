import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/layout/Navbar';
import AboutSection from './components/sections/AboutSection';
import HeroSection from './components/sections/HeroSection';
import ExperienceSection from './components/sections/ExperiencesSection';
import { Container } from './components/styles/common/Container.styled';
import { GlobalStyles } from './components/styles/Globals.styed';
import ServicesSection from './components/sections/ServicesSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

const App = () => {
  const theme = {
    colors: {
      white: 'rgba(240, 247, 255, 1)',
      navyBlue: 'rgba(2, 12, 27, 1)',
      lightNavyBlue: 'rgba(4, 22, 48, 1)',
      green: 'rgba(0, 206, 158, 1)',
      orange: 'rgba(249, 105, 14, 1)',
      transparentOrange: 'rgba(249, 105, 14, 0.1)',
      purple: 'rgba(102, 51, 153, 1)',
    },
    mobile: '768px',
    transition: 'all 650ms ease-in-out',
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <HeroSection />
        <Container>
          <AboutSection />
          <ExperienceSection />
          <ServicesSection />
          <ContactSection />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
