import React from 'react';
import { CTAButton } from '../styles/common/CTAButton.styled';
import {
  HeroContent,
  HeroSocialIcons,
  SocialIcon,
  StyledArrowDown,
  StyledHeroSection,
} from '../styles/sections/HeroSection.styled';
import {
  FaArrowDown,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';

const HeroSection = () => {
  return (
    <StyledHeroSection id='hero-section'>
      <HeroContent>
        <h1>Suveen Vundavalli</h1>
        <h3>{'{Software Engineer}'}</h3>
        <p>Java . Spring . gRPC . GraphQL . Kafka . Kubernetes</p>
        <div>
          <CTAButton href='#projects'>Projects</CTAButton>
          <CTAButton href='#contact' primary margin='0 0 0 20px'>
            Contact
          </CTAButton>
        </div>
      </HeroContent>
      <StyledArrowDown href='#about'>
        <FaArrowDown />
      </StyledArrowDown>
      <HeroSocialIcons>
        <SocialIcon href='#' target='_blank'>
          <FaGithub />
        </SocialIcon>
        <SocialIcon href='#' target='_blank'>
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href='#' target='_blank'>
          <FaFacebook />
        </SocialIcon>
      </HeroSocialIcons>
    </StyledHeroSection>
  );
};

export default HeroSection;
