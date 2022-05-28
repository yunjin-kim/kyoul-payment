import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import ConfirmButton from '../../components/card/ConfirmButton';

import { createPageAction } from '../../context/PageProvider';
import { createAction } from '../../context/Provider';

import { useAppDispatch, useAppState, usePageDispatch } from '../../hooks';
import { removePathnameCardEdit } from '../../utils';
import { ActionType, PageActionType } from '../../types';

function ConfirmButtonContainer() {
  const pageDispatch = usePageDispatch();
  const appDispatch = useAppDispatch();

  const {
    firstInputCardNumber,
    secondInputCardNumber,
    thirdInputCardNumber,
    fourthInputCardNumber,
    name,
    expiredPeriodMonth,
    expiredPeriodYear,
    cvc,
    firstPassword,
    secondPassword,
    cardType,
    cardAlias,
  } = useAppState();

  const handleConfirmCard = () => {
    appDispatch(
      createAction(ActionType.ADD_CARD_LIST, [
        {
          id: uuidv4(),
          firstCardNumber: firstInputCardNumber,
          secondCardNumber: secondInputCardNumber,
          thirdCardNumber: thirdInputCardNumber,
          fourthCardNumber: fourthInputCardNumber,
          ownerName: name,
          month: expiredPeriodMonth,
          year: expiredPeriodYear,
          cvc: cvc,
          firstPassword: firstPassword,
          secondPassword: secondPassword,
          type: cardType,
          alias: cardAlias,
        },
      ]),
    );
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

  let _disabled = true;
  if (cardAlias !== '') {
    _disabled = false;
  }

  return (
    <ConfirmButton type="button" onClick={handleConfirmCard} disabled={_disabled}>
      확인
    </ConfirmButton>
  );
}

export default ConfirmButtonContainer;
