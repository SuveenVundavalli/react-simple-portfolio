import React from 'react';
import { SectionHeading } from '../styles/common/SectionHeading.styled';
import {
  ExperienceDescription,
  ExperienceImageContainer,
  SingleExperience,
  SlantedCard,
  StyledExperiencesSection,
  Tags,
} from '../styles/sections/ExperiencesSection.styled';
import { Experience } from '../../data/Experience';
import { TbWorldWww } from 'react-icons/tb';

const ExperienceSection = () => {
  return (
    <>
      <StyledExperiencesSection id='experiences'>
        <SectionHeading>
          <h1>Experiences</h1>
          <p>These are my experiences in the field</p>
        </SectionHeading>
        <div>
          {Experience &&
            Experience.map((experience, index) => (
              <SingleExperience key={index}>
                <ExperienceImageContainer
                  href={experience.website}
                  target='_blank'
                >
                  <img src={experience.thumbnail} alt={experience.title} />
                  <SlantedCard />
                </ExperienceImageContainer>
                <ExperienceDescription>
                  <h1>{experience.title}</h1>
                  <Tags>
                    {experience.tags &&
                      experience.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                      ))}
                  </Tags>
                  <p>{experience.paragraph}</p>
                  <div>
                    <a href={experience.socialLink} target='_blank'>
                      <TbWorldWww />
                      <span>{experience.socialLinkText}</span>
                    </a>
                  </div>
                </ExperienceDescription>
              </SingleExperience>
            ))}
        </div>
      </StyledExperiencesSection>
      <hr />
    </>
  );
};

export default ExperienceSection;
