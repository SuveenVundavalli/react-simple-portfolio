import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { SectionHeading } from '../styles/common/SectionHeading.styled';
import {
  ContactInfo,
  DetailsWrapper,
  ImageWrapper,
  StyledContactSection,
} from '../styles/sections/ContactSection.styled';

const ContactSection = () => {
  return (
    <>
      <StyledContactSection id='contact'>
        <SectionHeading>
          <h1>Contact</h1>
          <p>Get in touch</p>
        </SectionHeading>
        <DetailsWrapper>
          <ContactInfo>
            <p>
              I'd love if you reached out to me. Even if it's just to say
              "Hey!". Don't hesitate! Drop me a line and I'll get back to you
              ASAP!
            </p>
            <div>
              <a href='mailto:suveenkumar.vundavalli@gmail.com'>
                <FaEnvelope /> <span>suveenkumar.vundavalli@gmail.com</span>
              </a>
              <a href='#' target='_blank'>
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
            </div>
          </ContactInfo>
          <ImageWrapper>
            <img src='./images/contact.svg' alt='Contact me' />
          </ImageWrapper>
        </DetailsWrapper>
      </StyledContactSection>
      <hr />
    </>
  );
};

export default ContactSection;
