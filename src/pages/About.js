import React from 'react';
import styled, { keyframes } from 'styled-components';

import Styles from '../Styles';
import interests from '../data/Interests';
import Interest from '../components/Interest';
import Slider from '../components/Slider';
import chevrons from '../icons/double-chevron.svg';

const About = () => {
  const aboutRef = React.createRef();
  const [w, setW] = React.useState(null);

  React.useEffect(() => {
    setW(aboutRef.current.clientWidth);
  }, [aboutRef]);

  return (
    <Wrapper ref={aboutRef}>
      <Slider parentClientWidth={w}>
        <TextWrapper id="bananen">
          <Intro>
            Mijn passies en <br />
            <Underline>drijfveren</Underline> zijn...
          </Intro>
          <Scroll>Scroll door en leer meer</Scroll>
        </TextWrapper>
        {interests.map((item) => (
          <Interest key={item.id} item={item} />
        ))}
      </Slider>
    </Wrapper>
  );
};

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
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  & div {
    outline: none;
  }
`;

const TextWrapper = styled.div`
  padding: 4rem;
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (${Styles.breakpoints.laptopWidth}) {
    width: 65vw;
  }

  @media (${Styles.breakpoints.tabletWidth}) {
    width: 80vw;
    padding: 2rem;
  }
`;

const Intro = styled.h2`
  color: ${Styles.colors.primary};
  font-size: ${Styles.fontSizes.L};
  line-height: ${Styles.lineHeights.L};
  font-family: 'Open Sans';
  font-weight: 800;
  align-self: flex-start;
  z-index: 0;

  @media (${Styles.breakpoints.laptopWidth}) {
    font-size: ${Styles.fontSizes.M};
    line-height: ${Styles.lineHeights.M};
  }

  @media (${Styles.breakpoints.tabletWidth}) {
    font-size: ${Styles.fontSizes.S};
    line-height: ${Styles.lineHeights.S};
  }
`;

const Underline = styled.span`
  z-index: 1;
  box-shadow: inset 0 -0.6rem 0 ${Styles.colors.secondary}, inset 0 -3rem 0 ${Styles.colors.highlight};

  @media (${Styles.breakpoints.laptopWidth}) {
    box-shadow: inset 0 -0.6rem 0 ${Styles.colors.secondary}, inset 0 -2.6rem 0 ${Styles.colors.highlight};
  }

  @media (${Styles.breakpoints.tabletWidth}) {
    box-shadow: inset 0 -0.6rem 0 ${Styles.colors.secondary}, inset 0 -2rem 0 ${Styles.colors.highlight};
  }
`;

const Scroll = styled.span`
  color: ${Styles.colors.primary};
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: ${Styles.fontSizes.XS};
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
