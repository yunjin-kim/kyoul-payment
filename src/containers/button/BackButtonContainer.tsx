import React from 'react';
import styled from '@emotion/styled';

import { createPageAction } from '../../context/PageProvider';

import { useAppDispatch, usePageDispatch } from '../../hooks';
import { ActionType, PageActionType } from '../../types';
import { createAction } from '../../context/Provider';

const SvgWrapper = styled.div(() => ({
  width: '30px',
  height: '30px',
}));

function BackButtonContainer() {
  const appDispatch = useAppDispatch();
  const pageDispatch = usePageDispatch();

  const handlePayPage = () => {
    appDispatch(createAction(ActionType.FIRST_INPUT_CARD_NUMBER, ''));
    appDispatch(createAction(ActionType.SECOND_INPUT_CARD_NUMBER, ''));
    appDispatch(createAction(ActionType.THIRD_INPUT_CARD_NUMBER, ''));
    appDispatch(createAction(ActionType.FOURTH_INPUT_CARD_NUMBER, ''));
    appDispatch(createAction(ActionType.INPUT_NAME, ''));
    appDispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_MONTH, ''));
    appDispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_YEAR, ''));
    appDispatch(createAction(ActionType.INPUT_CVC, ''));
    appDispatch(createAction(ActionType.FIRST_INPUT_PASSWORD, ''));
    appDispatch(createAction(ActionType.SECOND_INPUT_PASSWORD, ''));
    appDispatch(createAction(ActionType.COMPLETE_CARD, false));
    appDispatch(createAction(ActionType.CARD_TYPE, ''));
    appDispatch(createAction(ActionType.INPUT_CARD_ALIAS, ''));

    pageDispatch(createPageAction(PageActionType.PAY_PAGE, true));
  };

  return (
    // <Link to="/card">
    <SvgWrapper onClick={handlePayPage}>
      <svg
        className="w-1 h-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </SvgWrapper>
    // </Link>
  );
}

export default BackButtonContainer;
