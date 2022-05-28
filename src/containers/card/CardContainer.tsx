import React from 'react';
import axios from 'axios';

import Card from '../../components/card/Card';

import { createAction } from '../../context/Provider';

import { useAppDispatch, useAppState } from '../../hooks';
import { ActionType } from '../../types';

function CardContainer() {
  const {
    id,
    firstInputCardNumber,
    secondInputCardNumber,
    thirdInputCardNumber,
    fourthInputCardNumber,
    name,
    expiredPeriodMonth,
    expiredPeriodYear,
    cardType,
  } = useAppState();
  const dispatch = useAppDispatch();

  const handleCardClick = () => {
    dispatch(createAction(ActionType.CHANGE_CARD_TYPE, true));
  };

  return (
    <Card
      firstInputCardNumber={firstInputCardNumber}
      secondInputCardNumber={secondInputCardNumber}
      thirdInputCardNumber={thirdInputCardNumber}
      fourthInputCardNumber={fourthInputCardNumber}
      name={name}
      expiredPeriodMonth={expiredPeriodMonth}
      expiredPeriodYear={expiredPeriodYear}
      cardType={cardType}
      handleCardClick={handleCardClick}
    />
  );
}

export default CardContainer;
