import React from 'react';
import styled from 'styled-components'
import Styles from '../Styles';

function About() {
  return (
    <Wrapper>
      <Left />
      <Right />
      <Project>
        Hoi
      </Project>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${Styles.colors.primary};
  height: 25%;
  width: 100%;
  overflow-x: scroll;
  // overflow-y: hidden;
  white-space: nowrap;

  div{
    height: 100%;
    display: inline-block;
    vertical-align: top;
  }
`;

const Left = styled.div`
  width: 50vw;
`;

const Right = styled.div`
  width: 30vw;
  background-color: red;
`;

const Project = styled.div`
  width: 30vw;
  background-color: blue;
`;

export default About;
