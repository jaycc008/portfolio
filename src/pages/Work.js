import React from 'react';
import styled, { keyframes } from 'styled-components'

import Styles from '../Styles.json';
import Project from '../components/Project';
import chevrons from '../icons/double-chevron-black.svg';
import projectItems from './ProjectItems.json';

function Work() {
  const [activeProject, setActiveProject] = React.useState(0);

  const navigate = (direction) => {
    if(direction === 'prev'){
      activeProject > 0 ? setActiveProject(activeProject - 1) : setActiveProject(projectItems.length - 1);
    }else if(direction === 'next'){
      activeProject < projectItems.length - 1 ? setActiveProject(activeProject + 1) : setActiveProject(0)
    }
  }

  return (
    <Wrapper>
      <Intro>
        <Underline>Projecten</Underline>
      </Intro>
      <RowWrapper>
        <Row>
          <aside></aside>
          <ProjectWrapper>
            <Project
              key={projectItems[activeProject].id}
              item={projectItems[activeProject]}
              onClick={navigate}
            />
          </ProjectWrapper>
          <aside></aside>
        </Row>
      </RowWrapper>
      <Scroll>Scroll door om mijn skills te checken</Scroll>
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
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  justify-content: space-between;
`;

const RowWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-bottom: 5.8rem;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  flex: 0 0 auto;
  display: grid;
  grid-template-areas: "left projects right";
  grid-template-columns: 1fr 10fr 1fr;
  overflow-x: hidden;
  grid-gap: 0 4rem;
`;

const ProjectWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  & > div{
    flex: 0 0 auto;
    width: 100%;
  }
`;

const Intro = styled.h2`
    color: ${Styles.colors.secondary};
  font-size: ${Styles.fontSizes.aboutIntro};
  font-weight: 700;
  font-family: "Open Sans ExtraBold";
  line-height: 8rem;
  align-self: flex-start;
  z-index: 0;
`;

const Underline = styled.span`
    z-index: 1;
    box-shadow: inset 0 -0.6rem 0 ${Styles.colors.primary}, inset 0 -3rem 0 ${Styles.colors.highlight};
`;

const Scroll = styled.span`
    color: ${Styles.colors.secondary};
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

export default Work;
