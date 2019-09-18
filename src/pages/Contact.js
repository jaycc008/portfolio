import React from 'react';
import styled from 'styled-components';

import Styles from '../Styles';

const Home = () => (
  <Wrapper>
    <div>
      <Contact>Neem <Underline>contact</Underline> op met mij!</Contact>
      <ContactInfo>
        <p>+31 (0)6 18 96 64 53</p>
        <Mail href="mailto:jayce@ja-development.nl">jayce@ja-development.nl</Mail>
      </ContactInfo>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: ${Styles.colors.secondary};
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh;  

  & > div {
    margin: auto;
  }
`;

const Contact = styled.h2`
  color: ${Styles.colors.primary};
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: ${Styles.fontSizes.S};
  line-height: ${Styles.lineHeights.S};
  margin-bottom: 2rem;

  @media (${Styles.breakpoints.tabletWidth}) {
    font-size: ${Styles.fontSizes.MobileS};
    line-height: ${Styles.lineHeights.MobileS};
  }
`;

const Underline = styled.span`
  box-shadow: inset 0 -0.4rem 0 ${Styles.colors.secondary}, inset 0 -2rem 0 #005C59;

  @media (${Styles.breakpoints.tabletWidth}) {
    box-shadow: inset 0 -0.4rem 0 ${Styles.colors.secondary}, inset 0 -1.2rem 0 #005C59;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > p, & > a{
    color: ${Styles.colors.primary};
    font-family: 'Open Sans', sans-serif;
  font-weight: 800;
    font-size: ${Styles.fontSizes.XS};
    line-height: ${Styles.lineHeights.XS};
  }
`;

const Mail = styled.a`
  box-shadow: inset 0 -0.3rem 0 ${Styles.colors.secondary}, inset 0 -1.1rem 0 #005C59;
  transition: 0.3s;
  &:hover{
    box-shadow: inset 0 -0.3rem 0 ${Styles.colors.secondary}, inset 0 -2.1rem 0 #005C59;
  }
`;

export default Home;
