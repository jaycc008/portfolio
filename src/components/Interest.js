import React from 'react';
import styled from 'styled-components';

import Styles from '../Styles.json';

const Interest = ({item}) => {
  return (
    <Wrapper>
      <Image src={item.src} alt={item.title} />
      <ContentWrapper>
        <Title>{item.title}</Title>
        <Link href={item.link} target="_blank"><Underline>{item.linkText}</Underline></Link>
        <TextWrapper>
          <Text>
            {item.text}
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${Styles.colors.primary};
  padding: 4rem;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  height: 100%;
`;

const ContentWrapper = styled.div`
  padding-left: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Title = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: 4rem;
  line-height: 5.6rem;
  margin-bottom: 0.8rem;
`;

const TextWrapper = styled.div`
  width: 43rem;
  margin-right: 13.4rem;
`;

const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.6rem;
  display: inline-block;
  width: 43rem;
  margin-right: 13.4rem;
`;

const Link = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: 1.6rem;
  line-height: 2.6rem;
  margin-bottom: 1.6rem;
  color: ${Styles.colors.primary};
`;

const Underline = styled.span`
  box-shadow: inset 0 -0.8rem 0 ${Styles.colors.highlight};
  transition: 0.3s;
  &:hover{
    box-shadow: inset 0 -2.4rem 0 ${Styles.colors.highlight};
  }
`;

export default Interest;
