import React from 'react';
import styled from 'styled-components'

import Styles from '../Styles.json';

const Home = () => {
  return (
    <Wrapper>
      <div>
        <Contact>Neem <Underline>contact</Underline> op met mij!</Contact>
        <ContactInfo>
          <p>+31 (0)6 18 96 64 53</p>
          <Mail href="mailto:jayce.ardon@gmail.com">jayce.ardon@gmail.com</Mail>
        </ContactInfo>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${Styles.colors.secondary};
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 25%;

  & > div {
    margin: auto;
  }
`;

const Contact = styled.h2`
  color: ${Styles.colors.primary};
  font-family: "Open Sans ExtraBold";
  font-size: 4rem;
  line-height: 5.6rem;
  margin-bottom: 2rem;
`;

const Underline = styled.span`
  box-shadow: inset 0 -0.4rem 0 ${Styles.colors.secondary}, inset 0 -2rem 0 #005C59;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > p, & > a{
    color: ${Styles.colors.primary};
    font-family: 'Open Sans ExtraBold';
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`;

const Mail = styled.a`
  &:hover{
    box-shadow: inset 0 -0.3rem 0 ${Styles.colors.secondary}, inset 0 -1.1rem 0 #005C59;
  }
`;

export default Home;
