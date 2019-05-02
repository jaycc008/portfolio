import React from 'react';
import styled, { keyframes } from 'styled-components'
import Styles from '../Styles';
import chevrons from '../assets/icons/double-chevron-black.svg';
import jayce from '../assets/img/jayce.jpg';

function About() {
  return (
    <Wrapper>
        <Left>
            <Intro>
                Mijn passies en <br />
                <Underline>drijfveren</Underline> zijn...
            </Intro>
            <Scroll>Scroll door en leer meer</Scroll>
        </Left>
        <Right>
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
    background-color: ${Styles.colors.secondary};
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 25%;
    padding-left: 4rem;
`;

const Left = styled.div`
    width: 50%;
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
    margin-top: 4rem;
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
    &:after{
        content: '';
        border-bottom: 2.4rem solid #005C59;
        position: absolute;
        z-index: -1;
        width: 32.9rem;
        left: 0;
        bottom: 0.3rem;
    }
`;

const ProfilePicture = styled.div`
    background-image: url(${jayce});
    background-size: cover;
    background-position: center;
    width: 47rem;
    height: 47rem;
`;

const Scroll = styled.span`
    color: ${Styles.colors.primary};
    text-transform: uppercase;
    font-family: "Open Sans SemiBold";
    font-size: 1.6rem;
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

export default About;
