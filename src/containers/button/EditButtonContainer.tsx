import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { createAction } from 'context/Provider';

import { useAppDispatch, useAppState } from 'hooks';
import { ActionType } from 'types';

const EditButtonStyled = styled.button(
  css`
    border: none;
    background: inherit;
    cursor: pointer;
  `,
);

function EditButtonContainer({ id }: { id: string }) {
  const { cardList } = useAppState();
  const dispatch = useAppDispatch();

  const handleEditButtonClick = (event: any) => {
    const cardId = event.target.id;

    dispatch(createAction(ActionType.ID, event.target.id));
    const editCard = cardList.find((card) => card.id === cardId);

    if (!editCard) return alert('해당하는 카드는 존재하지 않습니다.');

      dispatch(createAction(ActionType.FIRST_INPUT_CARD_NUMBER, editCard.firstCardNumber));
      dispatch(createAction(ActionType.SECOND_INPUT_CARD_NUMBER, editCard.secondCardNumber));
      dispatch(createAction(ActionType.THIRD_INPUT_CARD_NUMBER, editCard.thirdCardNumber));
      dispatch(createAction(ActionType.FOURTH_INPUT_CARD_NUMBER, editCard.fourthCardNumber));
      dispatch(createAction(ActionType.INPUT_NAME, editCard.ownerName ? editCard.ownerName : ''));
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_MONTH, editCard.month));
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_YEAR, editCard.year));
      dispatch(createAction(ActionType.INPUT_CVC, editCard.cvc));
      dispatch(createAction(ActionType.FIRST_INPUT_PASSWORD, editCard.firstPassword));
      dispatch(createAction(ActionType.SECOND_INPUT_PASSWORD, editCard.secondPassword));
      dispatch(createAction(ActionType.COMPLETE_CARD, false));
      dispatch(createAction(ActionType.CARD_TYPE, editCard.type));
      dispatch(createAction(ActionType.INPUT_CARD_ALIAS, editCard.alias));
  };

  return (
    <EditButtonStyled id={id} onClick={handleEditButtonClick}>
      수정
    </EditButtonStyled>
  );
}

export default EditButtonContainer;
