import React from 'react';
import styled, { keyframes } from 'styled-components'

import Styles from '../Styles.json';
import chevrons from '../icons/double-chevron-black.svg';

const Home = () => {
  return (
    <Wrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    background-color: ${Styles.colors.secondary};
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 25%;
    padding-left: 4rem;
`;

export default Home;
