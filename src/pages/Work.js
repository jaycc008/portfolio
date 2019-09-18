import React from 'react';
import styled, { keyframes } from 'styled-components';

import Styles from '../Styles';
import Project from '../components/Project';
import chevrons from '../icons/double-chevron-black.svg';
import projectItems from '../data/ProjectItems';

function Work() {
  const [activeProject, setActiveProject] = React.useState(0);

  const navigate = (direction) => {
    if (direction === 'prev') {
      if (activeProject > 0) {
        setActiveProject(activeProject - 1);
      } else {
        setActiveProject(projectItems.length - 1);
      }
    } else if (direction === 'next') {
      if (activeProject < projectItems.length - 1) {
        setActiveProject(activeProject + 1);
      } else {
        setActiveProject(0);
      }
    }
  };

  return (
    <Wrapper>
      <Intro>
        <Underline>Projecten</Underline>
      </Intro>
      <RowWrapper>
        <Row>
          <aside />
          <ProjectWrapper>
            <Project
              key={activeProject}
              current={activeProject}
              item={projectItems[activeProject]}
              onClick={navigate}
              length={projectItems.length}
            />
          </ProjectWrapper>
          <aside />
        </Row>
      </RowWrapper>
      <Scroll>Scroll door voor mijn contactinformatie</Scroll>
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
  height: 100vh;  
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem;

  @media (${Styles.breakpoints.laptopHeight}), (${Styles.breakpoints.laptopWidth}) {
    padding: 2rem;
  }
`;

const RowWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-bottom: 5.8rem;

  @media (${Styles.breakpoints.laptopHeight}) {
    margin-bottom: 2rem;
  }
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  flex: 0 0 auto;
  display: grid;
  grid-template-areas: "left projects right";
  grid-template-columns: auto 10fr auto;
  overflow-x: hidden;
  grid-gap: 0 4rem;

  @media (${Styles.breakpoints.laptopWidth}) {
    grid-gap: 0 2rem;
  }

  @media (${Styles.breakpoints.tabletWidth}) {
    grid-gap: 0;
  }
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
  font-size: ${Styles.fontSizes.L};
  line-height: ${Styles.lineHeights.L};
  font-weight: 800;
  font-family: 'Open Sans';
  align-self: flex-start;
`;

const Underline = styled.span`
  box-shadow: inset 0 -0.6rem 0 ${Styles.colors.primary}, inset 0 -3rem 0 ${Styles.colors.highlight};
`;

const Scroll = styled.span`
  color: ${Styles.colors.secondary};
  text-transform: uppercase;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: ${Styles.fontSizes.XS};
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
