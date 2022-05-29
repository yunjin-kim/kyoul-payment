import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { useAppDispatch, useAppState, usePageDispatch } from '../../hooks';
import { createAction } from '../../context/Provider';
import { ActionType, CardType, PageActionType } from '../../types';
import { createPageAction } from '../../context/PageProvider';

const DeleteButtonStyled = styled.button(
  css`
    border: none;
    background: inherit;
    cursor: pointer;
  `,
);

function DeleteButtonContainer({ id }: { id: string }) {
  const { cardList } = useAppState();
  const appDispatch = useAppDispatch();
  const pageDispatch = usePageDispatch();

  const handleDeleteButtonClick = async (event: any) => {
    const cardId = event.target.id;
    if (window.confirm('등록된 카드를 삭제하시겠습니까?')) {
      appDispatch(createAction(ActionType.EDIT_CARD_LIST, cardList.filter((card: CardType) => card.id !== cardId)));
      pageDispatch(createPageAction(PageActionType.PAY_PAGE, true));
    }
  };

  return (
    <DeleteButtonStyled id={id} onClick={handleDeleteButtonClick}>
      삭제
    </DeleteButtonStyled>
  );
}

export default DeleteButtonContainer;
