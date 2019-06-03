import React,  {useCallback} from 'react';
import styled from 'styled-components';

import Styles from '../Styles.json';
import left from '../icons/arrow-left.svg';
import right from '../icons/arrow-right.svg';

const Project = ({ item, onClick, length }) => {
  
  return (
    <Wrapper>
      <ContentWrapper>
        <Nav>
          {item.id}/{length}
          <Arrow onClick={useCallback(() => onClick('prev'), [onClick])} style={{backgroundImage: `url(${left})`}} />
          <Arrow onClick={useCallback(() => onClick('next'), [onClick])} style={{backgroundImage: `url(${right})`}} />
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
            {item.url ? <Link href={item.url} target='_blank'>Link naar website</Link> : ''}
          </Text>
          <aside />
        </TextWrapper>
      </ContentWrapper>
      <Image style={{backgroundImage: `url(${item.src})`}} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-template-areas: "text image";

  outline: none;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6.4rem;

  @media (${Styles.breakpoints.laptop}) {
    margin-top: 2rem;
  }
`;

const Nav = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: 8.8rem;
  line-height: 10.4rem;
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
  font-size: 4rem;
  line-height: 5.6rem;
  margin-bottom: 2rem;
`;

const TextWrapper = styled.div`
  display: grid;
  grid-template-areas: "left projects margin";
  grid-template-columns: 1fr 4fr 1fr;
  grid-gap: 0 4rem;
`;

const SubTitle = styled.h4`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #090B0B;
  opacity: 0.75;
  font-size: 1.6rem;
  line-height: 2.6rem;
  margin-bottom: 0.4rem;
`;

const Text = styled.div`
  display: inline-block;
  width: 43rem;
  & p{
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`;

const Image = styled.div`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const Technologies = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #090B0B;
  opacity: 0.75;
  font-size: 1.6rem;
  line-height: 2.6rem;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
`;

const Link = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: 1.6rem;
  line-height: 2.6rem;
  margin-bottom: 1.6rem;
  color: ${Styles.colors.secondary};
  box-shadow: inset 0 -0.8rem 0 ${Styles.colors.highlight};
  transition: 0.3s;
  &:hover{
    box-shadow: inset 0 -2.4rem 0 ${Styles.colors.highlight};
  }
`;

export default Project;
