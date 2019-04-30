import React from 'react';
import styled from 'styled-components'
import Header from './components/Header'

function App() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(100% - 11.2rem);
  position: relative; 
  left: 11.2rem;
  height: 400vh;
`;

export default App;
