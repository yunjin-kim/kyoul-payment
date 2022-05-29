import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { createAction } from '../../context/Provider';

import { useAppDispatch, useAppState, usePageDispatch } from '../../hooks';
import { ActionType, CardType, PageActionType } from '../../types';
import { createPageAction } from '../../context/PageProvider';

const EditButtonStyled = styled.button(
  css`
    border: none;
    background: inherit;
    cursor: pointer;
  `,
);

function EditButtonContainer({ id }: { id: string }) {
  const { cardList } = useAppState();
  const appDispatch = useAppDispatch();
  const pageDispatch = usePageDispatch();

  const handleEditButtonClick = (event: any) => {
    const cardId = event.target.id;

    appDispatch(createAction(ActionType.ID, event.target.id));
    const editCard = cardList.find((card: CardType) => card.id === cardId);

    if (!editCard) return alert('해당하는 카드는 존재하지 않습니다.');

      appDispatch(createAction(ActionType.FIRST_INPUT_CARD_NUMBER, editCard.firstCardNumber));
      appDispatch(createAction(ActionType.SECOND_INPUT_CARD_NUMBER, editCard.secondCardNumber));
      appDispatch(createAction(ActionType.THIRD_INPUT_CARD_NUMBER, editCard.thirdCardNumber));
      appDispatch(createAction(ActionType.FOURTH_INPUT_CARD_NUMBER, editCard.fourthCardNumber));
      appDispatch(createAction(ActionType.INPUT_NAME, editCard.ownerName ? editCard.ownerName : ''));
      appDispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_MONTH, editCard.month));
      appDispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_YEAR, editCard.year));
      appDispatch(createAction(ActionType.INPUT_CVC, editCard.cvc));
      appDispatch(createAction(ActionType.FIRST_INPUT_PASSWORD, editCard.firstPassword));
      appDispatch(createAction(ActionType.SECOND_INPUT_PASSWORD, editCard.secondPassword));
      appDispatch(createAction(ActionType.COMPLETE_CARD, false));
      appDispatch(createAction(ActionType.CARD_TYPE, editCard.type));
      appDispatch(createAction(ActionType.INPUT_CARD_ALIAS, editCard.alias));

      pageDispatch(createPageAction(PageActionType.CARD_EDIT_PAGE, true));
  };

  return (
    <EditButtonStyled id={id} onClick={handleEditButtonClick}>
      수정
    </EditButtonStyled>
  );
}

export default EditButtonContainer;
