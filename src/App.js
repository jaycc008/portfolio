import React  from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

const App = () => {

  return (
    <Wrapper>
      <Header />
      <Element name="Home" className="element"><Home /></Element>
      <Element name="About" className="element"><About /></Element>
      <Element name="Work" className="element"><Work /></Element>
      <Element name="Contact" className="element"><Contact /></Element>
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
