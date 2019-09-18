import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Styles from '../Styles';

const Interest = ({ item }) => {
  const interestRef = React.createRef();

  return (
    <Wrapper ref={interestRef}>
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
};

Interest.propTypes = {
  item: PropTypes.shape({}),
};

const Wrapper = styled.div`
  color: ${Styles.colors.primary};
  padding: 4rem;
  height: 100vh;
  display: flex;
  flex-direction: row;

  @media (${Styles.breakpoints.tabletWidth}) {
    padding: 2rem;
    flex-direction: column;
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: contain;
  object-position: bottom;
  width: 50rem;
  @media (${Styles.breakpoints.tabletWidth}) {
    height: 50%;
    transform: translateX(-19%);
  }
`;

const ContentWrapper = styled.div`
  padding-left: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (${Styles.breakpoints.tabletWidth}) {
    padding: 2rem;
  }
`;

const Title = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: ${Styles.fontSizes.S};
  line-height: ${Styles.lineHeights.S};
  margin-bottom: 0.8rem;
`;

const TextWrapper = styled.div`
  width: 43rem;
  margin-right: 13.4rem;
`;

const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: ${Styles.fontSizes.XS};
  line-height: ${Styles.lineHeights.XS};
  display: inline-block;
  width: 43rem;
  margin-right: 13.4rem;


  @media (${Styles.breakpoints.tabletWidth}) {
    font-size: ${Styles.fontSizes.XXS};
    line-height: ${Styles.lineHeights.XXS};
    width: 30rem;
  }
`;

const Link = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: ${Styles.fontSizes.XS};
  line-height: ${Styles.lineHeights.XS};
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
