import React from 'react';
import { CodedWith, StyledFooter } from '../styles/layout/Footer.styled';

const Footer = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <>
      <StyledFooter>
        <CodedWith>Coded with React and Styled Components</CodedWith>
        <div>
          &copy; March 2023 - {months[new Date().getMonth()]}{' '}
          {new Date().getFullYear()}
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
