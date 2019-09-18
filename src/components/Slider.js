import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Styles from '../Styles';
import left from '../icons/arrow-left-white.svg';
import right from '../icons/arrow-right-white.svg';

const Slider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  // eslint-disable-next-line react/prop-types
  const slides = [props.children[0], ...props.children[1]]; // Add intro to slides array

  const navigate = (direction) => {
    let newIndex = currentIndex;
    let newTranslateValue = translateValue;
    if (direction === 'prev' && currentIndex > 0) {
      newIndex -= 1;
      newTranslateValue += currentIndex === 1 ? props.parentClientWidth / 2 : 1184;
      setTranslateValue(newTranslateValue);
    }
    if (direction === 'next' && currentIndex < slides.length - 1) {
      newIndex += 1;
      newTranslateValue -= currentIndex === 0 ? props.parentClientWidth / 2 : 1184;
      setTranslateValue(newTranslateValue);
    }

    setCurrentIndex(newIndex);
  };

  return (
    <Wrapper>
      <PrevArrow
        onClick={() => navigate('prev')}
        className={currentIndex === 0 && 'disabled'}
      />
      <NextArrow
        onClick={() => navigate('next')}
        className={currentIndex === slides.length - 1 && 'disabled'}
      />
      <SlideWrapper style={{
        transform: `translateX(${translateValue}px)`,
        transition: 'transform ease-out 0.45s',
      }}
      >
        {slides.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            {item}
          </div>
        ))}
      </SlideWrapper>
    </Wrapper>
  );
};

Slider.propTypes = {
  parentClientWidth: PropTypes.number,
};

const Wrapper = styled.div`
  width: 100%;
`;

const PrevArrow = styled.div`
  cursor: pointer;
  position: absolute;
  left: 0;
  z-index: 1;
  width: 4rem;
  height: 4rem;
  background-color: ${Styles.colors.highlight};
  transition: 0.3s;
  top: 50%;
  transform: translate(0, -2rem);

  &:hover {
    background: ${Styles.colors.arrowHover};
  }

  &:before{
    content: '';
    background-image: url(${left});
    background-repeat: no-repeat;
    width: 1.6rem;
    height: 1.4rem;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
  }

  &.disabled{
    background-color: #999;
    cursor: auto;
  }
`;

const NextArrow = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  z-index: 1;
  width: 4rem;
  height: 4rem;
  background-color: ${Styles.colors.highlight};
  opacity: 1;
  transition: 0.3s;
  top: 50%;
  transform: translate(0, -2rem);

  &:hover {
    background: ${Styles.colors.arrowHover};
  }

  &:before{
    content: '';
    background-image: url(${right});
    background-repeat: no-repeat;
    width: 1.6rem;
    height: 1.4rem;
    display: block;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    opacity: 1;
  }

  &.disabled{
    cursor: auto;
    background-color: #999;
  }
`;

const SlideWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  & > *{
    flex-shrink: 0;
  }
`;

export default Slider;
