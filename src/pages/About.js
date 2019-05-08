import React from 'react';
import styled, { keyframes } from 'styled-components'

import Styles from '../Styles';
import Project from '../components/Project';
import chevrons from '../assets/icons/double-chevron-black.svg';
import tech from '../assets/img/674145718.png';

const About = () => {

  // const handleWheel = (e) => {
  //   e.preventDefault();
  //   console.info(e.currentTarget);
  //   const delta = Math.max(-1, Math.min(1, (e.deltaY || -e.detail)));
  //   e.currentTarget.scrollLeft += delta*40;
  // };

  return (
    // onWheel={(e) => handleWheel(e)}
    <Wrapper>
      <Column>
        <TextWrapper>
          <Intro>
            Mijn passies en <br />
            <Underline>drijfveren</Underline> zijn...
          </Intro>
          <Scroll>Scroll door en leer meer</Scroll>
        </TextWrapper>
      </Column>
      <Column>
        <Project src={tech} title='Technology'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea. 
        </Project>
      </Column>
    </Wrapper>
  );
}

const shift = keyframes`
  from {
    top: 0;
  }

  to {
    top: 0.4rem;
  }
`;

const Wrapper = styled.div`
  background-color: ${Styles.colors.secondary};
  height: 25%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const Column = styled.div`
  height: 100%;
  flex: 0 0 auto;
  &:first-child{
    width: 50%;
  }
`;

const TextWrapper = styled.div`
  padding: 4rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Intro = styled.h2`
    color: ${Styles.colors.primary};
  font-size: ${Styles.fontSizes.aboutIntro};
  font-weight: 700;
  font-family: "Open Sans ExtraBold";
  line-height: 8rem;
  align-self: flex-start;
  z-index: 0;
`;

const Underline = styled.span`
    z-index: 1;
    box-shadow: inset 0 -0.6rem 0 ${Styles.colors.secondary}, inset 0 -3rem 0 ${Styles.colors.highlight};
`;

const Scroll = styled.span`
    color: ${Styles.colors.primary};
    text-transform: uppercase;
    font-family: "Open Sans SemiBold";
    font-size: ${Styles.fontSizes.default};
    &:before{
        content: '';
        background-image: url(${chevrons});
        background-repeat: no-repeat;
        width: 1.6rem;
        height: 1.6rem;
        display: inline-block;
        padding-right: 0.8rem;
        position: relative;
        animation: ${shift} 1s linear infinite;
    }
`;

export default About;
