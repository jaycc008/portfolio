import React from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Home />
      <About />
      {/* <Work /> */}
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
