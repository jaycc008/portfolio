import React from 'react';
import styled from 'styled-components';

const Project = (props) => {
  return (
      <Wrapper>
        <Image src={props.src} alt={props.title} />
        <ContentWrapper>
          <Title>{props.title}</Title>
          <TextWrapper>
            <Text>
              {props.children}
            </Text>
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 4rem;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  height: 100%;
`;

const ContentWrapper = styled.div`
  padding-left: 4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Title = styled.h3`
  font-family: 'Open Sans ExtraBold';
  font-size: 4rem;
  line-height: 5.6rem;
  margin-bottom: 0.8rem;
`;

const TextWrapper = styled.div`
  width: 4rem;
`;

const Text = styled.p`
  font-family: 'Open Sans SemiBold';
  font-size: 1.6rem;
  line-height: 2.6rem;
  display: inline-block;
  width: 100px;
`;

export default Project;
