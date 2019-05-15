import React from 'react';
import styled, { keyframes } from 'styled-components'
import Slider from "react-slick";

import Styles from '../Styles.json';
import Interest from '../components/Interest';
import chevrons from '../icons/double-chevron.svg';
import left from '../icons/arrow-left.svg';
import right from '../icons/arrow-right.svg';

const About = () => {

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: false,
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
        <div>
          <Interest src='/img/674145718.png' title='Technology'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea. 
          </Interest>
        </div>
        <div>
          <Interest src='/img/674145718.png' title='Technology'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea. 
          </Interest>
        </div>
        <div>
          <Interest src='/img/674145718.png' title='Technology'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea. 
          </Interest>
        </div>
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

const Wrapper = styled.div`
  background-color: ${Styles.colors.secondary};
  height: 25%;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  padding: 4rem;
  height: 100vh;
  width: 50vw;
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
