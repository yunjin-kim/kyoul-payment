import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Card from '../../components/card/Card';
import ConfirmButtonContainer from '../../containers/button/ConfirmButtonContainer';
import CardFormInput from '../../components/card/CardFormInput';

import { useAppDispatch, useAppState } from '../../hooks';
import { removeWhiteSpaces } from '../../utils';
import { createAction } from '../../context/Provider';
import { ActionType } from '../../types';

const Wrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const style = css({
  width: '208px',
  height: '45px',
  outline: 'none !important',
  border: 'none',
  borderBottom: '2px solid black',
  fontSize: '18px',
  textAlign: 'center',
});

const CardCompleteTitle = styled.h1(() => ({
  width: '100%',
  fontSize: '20px',
  marginBottom: '78px',
  textAlign: 'center',
}));

function CardCompleteContainer() {
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
    cardAlias,
  } = useAppState();
  const dispatch = useAppDispatch();

  const handleCardAlias = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    dispatch(createAction(ActionType.INPUT_CARD_ALIAS, removeWhiteSpaces(value)));
  };

  return (
    <Wrapper>
      <CardCompleteTitle>카드등록이 완료되었습니다.</CardCompleteTitle>
      <Card
        firstInputCardNumber={firstInputCardNumber}
        secondInputCardNumber={secondInputCardNumber}
        thirdInputCardNumber={thirdInputCardNumber}
        fourthInputCardNumber={fourthInputCardNumber}
        name={name}
        expiredPeriodMonth={expiredPeriodMonth}
        expiredPeriodYear={expiredPeriodYear}
        cardType={cardType}
      />
      <CardFormInput
        value={cardAlias}
        onChange={handleCardAlias}
        placeholder="카드별칭을 입력해주세요."
        width='208px'
        height='45px'
      />
      <ConfirmButtonContainer id={id} />
    </Wrapper>
  );
}

export default CardCompleteContainer;
