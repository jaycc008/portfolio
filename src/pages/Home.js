import React from 'react';
import styled, { keyframes } from 'styled-components'

import Styles from '../Styles.json';
import chevrons from '../icons/double-chevron-black.svg';

const Home = () => {
  return (
    <Wrapper>
      <Left>
        <Intro>
          Welkom  <br />
          op mijn  <br />
          <Underline>portfolio</Underline>!
        </Intro>
      </Left>
      <Right>
        <ProfilePicture />
        <Scroll>Scroll om me te leren kennen</Scroll>
      </Right>
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
  background-color: ${Styles.colors.primary};
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  padding-left: 4rem;

  @media (${Styles.breakpoints.laptopHeight}), (${Styles.breakpoints.laptopWidth}) {
    padding-left: 2rem;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
`;

const Intro = styled.h1`
  color: ${Styles.colors.secondary};
  font-size: ${Styles.fontSizes.XXL};
  line-height: ${Styles.lineHeights.XXL};
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  align-self: flex-end;
  position: relative;
  z-index: 0;
  margin-bottom: 4rem;

  @media (${Styles.breakpoints.laptopHeight}), (${Styles.breakpoints.laptopWidth}) {
    margin-bottom: 2rem;
    font-size: ${Styles.fontSizes.XL};
    line-height: ${Styles.fontSizes.XL};
  }

  @media (${Styles.breakpoints.tabletWidth}) {
    align-self: flex-start;
    margin-top: 2rem;
    font-size: ${Styles.fontSizes.L};
    line-height: ${Styles.fontSizes.L};
  }

  @media (${Styles.breakpoints.mobileWidth}) {
    font-size: ${Styles.fontSizes.S};
    line-height: ${Styles.fontSizes.S};
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media (${Styles.breakpoints.tabletWidth}) {
    flex-direction: column-reverse;
  }
`;

const Underline = styled.span`
  z-index: 1;
  box-shadow: inset 0 -0.9rem 0 ${Styles.colors.primary}, inset 0 -4.1rem 0 ${Styles.colors.highlight};
  
  @media (${Styles.breakpoints.laptopHeight}), (${Styles.breakpoints.laptopWidth}) {
    box-shadow: inset 0 -0.9rem 0 ${Styles.colors.primary}, inset 0 -3.7rem 0 ${Styles.colors.highlight};
  }
  
  @media (${Styles.breakpoints.tabletWidth}) {
    box-shadow: inset 0 -0.9rem 0 ${Styles.colors.primary}, inset 0 -3.1rem 0 ${Styles.colors.highlight};
  }
  
  @media (${Styles.breakpoints.mobileWidth}) {
    box-shadow: inset 0 -0.9rem 0 ${Styles.colors.primary}, inset 0 -2.3rem 0 ${Styles.colors.highlight};
  }
`;

const ProfilePicture = styled.div`
  background-image: url('/img/jayce.jpg');
  background-size: cover;
  background-position: center;
  width: 47rem;
  height: 47rem;

  @media (${Styles.breakpoints.laptopWidth}) {
    width: 37rem;
    height: 37rem;
  }

  @media (${Styles.breakpoints.tabletWidth}) {
    display: none;
  }
`;

const Scroll = styled.span`
  color: ${Styles.colors.secondary};
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: ${Styles.fontSizes.XS};
  margin: 4rem;
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

  @media (${Styles.breakpoints.laptopHeight}), (${Styles.breakpoints.laptopWidth}) {
    margin: 2rem;
    white-space: nowrap;
  }

  @media (${Styles.breakpoints.mobileWidth}) {
    font-size: ${Styles.fontSizes.XXS};
    margin: 0 2rem 2rem 0;
    white-space: nowrap;
  }
`;

export default Home;
