import React from 'react';
import styled, { keyframes } from 'styled-components'

import Styles from '../Styles.json';
import chevrons from '../icons/double-chevron-black.svg';

const Home = () => {
  return (
    <Wrapper>
      <Left>
        <Intro>
          Yo! <br />
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
`;

const Left = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
`;

const Intro = styled.h1`
    color: ${Styles.colors.secondary};
    font-size: ${Styles.fontSizes.intro};
    font-weight: 700;
    font-family: "Open Sans ExtraBold";
    line-height: 10.4rem;
    align-self: flex-end;
    margin-bottom: 4rem;
    position: relative;
    z-index: 0;
`;

const Right = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`;

const Underline = styled.span`
    z-index: 1;
    box-shadow: inset 0 -0.9rem 0 ${Styles.colors.primary}, inset 0 -4.1rem 0 ${Styles.colors.highlight};
`;

const ProfilePicture = styled.div`
    background-image: url('/img/jayce.jpg');
    background-size: cover;
    background-position: center;
    width: 47rem;
    height: 47rem;
`;

const Scroll = styled.span`
    color: ${Styles.colors.secondary};
    text-transform: uppercase;
    font-family: "Open Sans SemiBold";
    font-size: ${Styles.fontSizes.default};
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
`;

export default Home;
