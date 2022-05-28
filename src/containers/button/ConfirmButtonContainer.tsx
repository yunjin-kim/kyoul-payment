import React from 'react';
import axios from 'axios';

import ConfirmButton from '../../components/card/ConfirmButton';

import { createPageAction } from '../../context/PageProvider';
import { createAction } from '../../context/Provider';

import { useAppDispatch, useAppState, usePageDispatch } from '../../hooks';
import { removePathnameCardEdit } from '../../utils';
import { ActionType, CardType, PageActionType } from '../../types';

function ConfirmButtonContainer() {
  const pageDispatch = usePageDispatch();
  const appDispatch = useAppDispatch();

  const {
    id,
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

  const handleConfirmCard = async () => {
    appDispatch(
      createAction(ActionType.SET_CARD_LIST, [
        {
          id: id,
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
    pageDispatch(createPageAction(PageActionType.PAY_PAGE, true));
    // const cardId = removePathnameCardEdit(window.location.pathname);
    // let pathName = '';
    // let methodType = '';

    //     if (window.location.pathname.includes('/card/add')) {
    //       pathName = 'http://localhost:4004/cards';
    //       methodType = 'post';
    //     } else if (window.location.pathname.includes('/card/edit/')) {
    //       pathName = `http://localhost:4004/cards/${cardId}`;
    //       methodType = 'patch';
    //     }
    //
    //     await axios(pathName, {
    //       method: methodType,
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       data: JSON.stringify({
    //         firstCardNumber: firstInputCardNumber,
    //         secondCardNumber: secondInputCardNumber,
    //         thirdCardNumber: thirdInputCardNumber,
    //         fourthCardNumber: fourthInputCardNumber,
    //         ownerName: name,
    //         month: expiredPeriodMonth,
    //         year: expiredPeriodYear,
    //         cvcNum: cvc,
    //         firstPasswordNum: firstPassword,
    //         secondPasswordNum: secondPassword,
    //         type: cardType,
    //         alias: cardAlias,
    //       }),
    //     });

    // window.location.pathname = '/card';
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
