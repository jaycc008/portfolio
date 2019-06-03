import React from 'react';
import styled, { keyframes } from 'styled-components'
import Slider from "react-slick";

import Styles from '../Styles.json';
import interests from '../data/Interests.json';
import Interest from '../components/Interest';
import chevrons from '../icons/double-chevron.svg';
import left from '../icons/arrow-left-white.svg';
import right from '../icons/arrow-right-white.svg';

const About = () => {

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <TextWrapper>
            <Intro>
              Mijn passies en <br />
              <Underline>drijfveren</Underline> zijn...
            </Intro>
            <Scroll>Scroll door en leer meer</Scroll>
          </TextWrapper>
        </div>
        {interests.map(item => (
          <div key={item.id}>
            <Interest item={item} />
          </div>
        ))}
      </Slider>
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
  height: 100vh;
  overflow: hidden;
  & div {
    outline: none;
  }
`;

const PrevArrow = styled.div`
  left: 0;
  z-index: 1;
  width: 4rem;
  height: 4rem;
  background-color: ${Styles.colors.highlight};
  transition: 0.3s;

  &.slick-disabled:hover {
    background: ${Styles.colors.highlight};
  }

  &:not(.slick-disabled):hover {
    background: ${Styles.colors.arrowHover};
  }

  &:before{
    content: '';
    background-image: url(${left});
    background-repeat: no-repeat;
    width: 1.6rem;
    height: 1.4rem;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

const NextArrow = styled.div`
  right: 0;
  z-index: 1;
  width: 4rem;
  height: 4rem;
  background-color: ${Styles.colors.highlight};
  opacity: 1;
  transition: 0.3s;

  &.slick-disabled:hover {
    background: ${Styles.colors.highlight};
  }

  &:not(.slick-disabled):hover {
    background: ${Styles.colors.arrowHover};
  }

  &:before{
    content: '';
    background-image: url(${right});
    background-repeat: no-repeat;
    width: 1.6rem;
    height: 1.4rem;
    display: block;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    opacity: 1;
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
