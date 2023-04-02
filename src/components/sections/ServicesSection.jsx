import React from "react";
import { FaBrain, FaCode, FaLaptop } from "react-icons/fa";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {
  IconWrapper,
  ServicesItems,
  SingleService,
  StyledServicesSection,
} from "../styles/sections/ServicesSection.styled";

const ServicesSection = () => {
  return (
    <>
      <StyledServicesSection id="services">
        <SectionHeading>
          <h1>Services</h1>
          <p>Excited to work with you</p>
        </SectionHeading>
        <ServicesItems>
          <SingleService>
            <IconWrapper>
              <FaCode />
            </IconWrapper>
            <h1>Backend Development</h1>
            <p>
              I build and maintain the server-side of web applications,
              responsible for database, APIs, and business logic.
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaLaptop />
            </IconWrapper>
            <h1>DevOps</h1>
            <p>
              I can automate software deployment, manage infrastructure, and
              ensure smooth collaboration between development and operations
              teams.
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaBrain />
            </IconWrapper>
            <h1>Team Player</h1>
            <p>
              I can collaborate effectively, communicate openly, and share
              knowledge to achieve common goals.
            </p>
          </SingleService>
        </ServicesItems>
      </StyledServicesSection>
      <hr />
    </>
  );
};

export default ServicesSection;
