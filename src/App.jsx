import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ExperienceSection from "./components/sections/ExperiencesSection";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import { Container } from "./components/styles/common/Container.styled";
import { GlobalStyles } from "./components/styles/Globals.styed";

const App = () => {
  const isDarkDefaultTheme = () => {
    const localThemeConfig = localStorage.getItem("useDarkMode");

    return localThemeConfig === null
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : localThemeConfig === "true";
  };
  const [useDarkMode, setUseDarkMode] = useState(isDarkDefaultTheme());

  useEffect(() => {
    localStorage.setItem("useDarkMode", useDarkMode);
  }, [useDarkMode]);

  const lightTheme = {
    colors: {
      primary: "rgba(2, 12, 27, 1)",
      lightPrimary: "rgba(4, 22, 48, 1)",
      secondary: "rgba(240, 247, 255, 1)",
      lightSecondary: "rgba(227, 236, 245, 1)",
      green: "rgba(0, 186, 52, 1)",
      orange: "rgba(249, 134, 14, 1)",
      transparentOrange: "rgba(249, 134, 0, 0.1)",
      purple: "rgba(102, 51, 153, 1)",
    },
    mobile: "768px",
    transition: "all 650ms ease-in-out",
  };

  // Old Theme
  const darkTheme = {
    colors: {
      primary: "rgba(240, 247, 255, 1)",
      lightPrimary: "rgba(227, 236, 245, 1)",
      secondary: "rgba(2, 12, 27, 1)",
      lightSecondary: "rgba(4, 22, 48, 1)",
      green: "rgba(0, 206, 158, 1)",
      orange: "rgba(249, 105, 14, 1)",
      transparentOrange: "rgba(249, 105, 14, 0.1)",
      purple: "rgba(102, 51, 153, 1)",
    },
    mobile: "768px",
    transition: "all 650ms ease-in-out",
  };
  return (
    <>
      <ThemeProvider theme={useDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Navbar useDarkMode={useDarkMode} setUseDarkMode={setUseDarkMode} />
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
