import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Styles from '../Styles';
import left from '../icons/arrow-left.svg';
import right from '../icons/arrow-right.svg';

const Project = ({ item, onClick, length, current }) => (
  <Wrapper>
    <ContentWrapper>
      <Nav>
        {current + 1}/{length}
        <Arrow onClick={useCallback(() => onClick('prev'), [onClick])} style={{ backgroundImage: `url(${left})` }} />
        <Arrow onClick={useCallback(() => onClick('next'), [onClick])} style={{ backgroundImage: `url(${right})` }} />
      </Nav>
      <Title>
        {item.title}
      </Title>
      <TextWrapper>
        <aside />
        <Text>
          <SubTitle>
            {item.subtitle}
          </SubTitle>
          <p>
            {item.text}
          </p>
          <Technologies>
            Technologiën: {item.technologies.join(', ')}
          </Technologies>
          {item.url ? <Link href={item.url} target="_blank">Link naar website</Link> : ''}
        </Text>
        <aside />
      </TextWrapper>
    </ContentWrapper>
    <Image style={{ backgroundImage: `url(${item.src})` }} />
  </Wrapper>
);

Project.propTypes = {
  item: PropTypes.shape({}),
  onClick: PropTypes.func,
  length: PropTypes.number,
  current: PropTypes.number,
};

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-template-areas: "text image";

  outline: none;

  @media (${Styles.breakpoints.tabletWidth}) {
    grid-template-columns: 1fr 0;
    grid-template-areas: "text image";
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6.4rem;

  @media (${Styles.breakpoints.laptopHeight}) {  
    margin-top: 2rem;
  }
`;

const Nav = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: ${Styles.fontSizes.XXL};
  line-height: ${Styles.lineHeights.XXL};
  margin-bottom: 0.8rem;
  user-select: none;
`;

const Arrow = styled.div`
  width: 1.6rem;
  height: 1.4rem;
  background-repeat: no-repeat;
  display: inline-block;
  cursor: pointer;
  
  &:first-child{
    margin: 0 0.8rem 0 1.6rem;
  }
`;

const Title = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: ${Styles.fontSizes.S};
  line-height: ${Styles.lineHeights.S};
  margin-bottom: 2rem;

  @media (${Styles.breakpoints.tabletWidth}) {
    font-size: ${Styles.fontSizes.Mobile};
    line-height: ${Styles.lineHeights.Mobile};
  }
`;

const TextWrapper = styled.div`
  display: grid;
  grid-template-areas: "left projects margin";
  grid-template-columns: auto 4fr auto;
  grid-gap: 0 4rem;

  @media (${Styles.breakpoints.laptopWidth}) {
    grid-gap: 0 2rem;
  }

  @media (${Styles.breakpoints.tabletWidth}) {
    grid-gap: 0;
  }
`;

const SubTitle = styled.h4`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #090B0B;
  opacity: 0.75;
  font-size: ${Styles.fontSizes.XS};
  line-height: ${Styles.lineHeights.XS};
  margin-bottom: 0.4rem;
`;

const Text = styled.div`
  display: inline-block;
  width: 43rem;
  & p{
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: ${Styles.fontSizes.XS};
    line-height: ${Styles.lineHeights.XS};
  }

  @media (${Styles.breakpoints.tabletWidth}) {
    max-width: 43rem;
    width: 100%;
  }
`;

const Image = styled.div`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (${Styles.breakpoints.tabletWidth}) {
    display: none;
  }
`;

const Technologies = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #090B0B;
  opacity: 0.75;
  font-size: ${Styles.fontSizes.XS};
  line-height: ${Styles.lineHeights.XS};
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
`;

const Link = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: ${Styles.fontSizes.XS};
  line-height: ${Styles.lineHeights.S};
  margin-bottom: 1.6rem;
  color: ${Styles.colors.secondary};
  box-shadow: inset 0 -0.8rem 0 ${Styles.colors.highlight};
  transition: 0.3s;
  &:hover{
    box-shadow: inset 0 -2.4rem 0 ${Styles.colors.highlight};
  }
`;

export default Project;
