import React from 'react';
import { CTAButton } from '../styles/common/CTAButton.styled';
import {
  AboutContent,
  DarkCircle,
  GradientCircle,
  ImageContainer,
  StyledAboutSection,
  StyledEmoji,
  StyledHeading,
  StyledImage,
} from '../styles/sections/AboutSection.styled';

const AboutSection = () => {
  const downloadTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob([document.getElementById('input').value], {
      type: 'text/plain;charset=utf-8}',
    });
    element.href = './Files/one.csv';
    element.download = 'one.csv';
    element.click();
  };
  return (
    <>
      <StyledAboutSection id='about'>
        <ImageContainer>
          <StyledImage src='./images/profile-pic.png' />
          <GradientCircle />
          <DarkCircle />
        </ImageContainer>
        <AboutContent>
          <StyledHeading>
            Hello <StyledEmoji>👋</StyledEmoji>
          </StyledHeading>
          <p>
            As a software developer, I am dedicated to producing high-quality
            code, continuously learning and improving, and collaborating with
            teams to deliver exceptional software solutions.
          </p>
          <p>
            I have a strong foundation in programming principles, and I am
            proficient in multiple programming languages and frameworks. I enjoy
            solving complex problems and creating innovative solutions, and I am
            always striving to stay up-to-date with the latest technologies and
            trends in the industry.
          </p>
          <p>
            I am a proactive and self-motivated individual, and I take pride in
            my work and the quality of code that I produce. I am also a strong
            communicator and team player, and I understand the importance of
            effective collaboration in the software development process.
          </p>
          <p>
            In addition to my technical skills, I am also committed to
            maintaining a high level of professionalism, and I always aim to
            meet deadlines and exceed expectations. Overall, I am passionate
            about software development, and I am constantly looking for new
            challenges and opportunities to grow as a developer.
          </p>
          <CTAButton href='./documents/Resume.pdf' download='Suveen_Resume.pdf'>
            Download Resume
          </CTAButton>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};

export default AboutSection;
