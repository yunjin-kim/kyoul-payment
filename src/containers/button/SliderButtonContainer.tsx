import React from 'react';
import styled from '@emotion/styled';

import { useAppState } from '../../hooks';

type SliderType = 'left' | 'right';

type Props = {
  type: SliderType;
  cardListSlider: any;
  cardLocation: any;
};

const SvgWrapper = styled.div(() => ({
  width: '30px',
  height: '30px',
}));

function SliderButtonContainer({ type, cardListSlider, cardLocation }: Props) {
  const { cardList } = useAppState();

  const sliderButtonClick = ({ target }: any) => {
    if (cardList.length === 0) return;
    if (target.id === 'left' && cardLocation.current === 0) return;
    if (target.id === 'right' && cardLocation.current === -1) return;
  
    cardListSlider.current.style.transitionDuration = '1s';
    target.id === 'right' ? (cardLocation.current -= 1) : (cardLocation.current += 1);
    cardListSlider.current.style.transform = `translateX(${cardLocation.current * 240}px)`;
  };

  if (type === 'left') {
    return (
      <SvgWrapper onClick={sliderButtonClick}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          cursor="pointer"
          xmlns="http://www.w3.org/2000/svg"
          id={type}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
            id={type}
          ></path>
        </svg>
      </SvgWrapper>
    );
  }

  return (
    <SvgWrapper onClick={sliderButtonClick}>
      <svg
        className="w-1 h-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        cursor="pointer"
        xmlns="http://www.w3.org/2000/svg"
        id={type}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
          id={type}
        ></path>
      </svg>
    </SvgWrapper>
  );
}

export default SliderButtonContainer;
