import React from 'react';

import AddCardPage from '../../pages/AddCardPage';
import PayPage from '../../pages/PayPage';
import CardEditPage from '../../pages/CardEditPage';

import { usePageState } from '../../hooks';

type TotalAccountType = { totalAccount: number };

function PaymentPage({ totalAccount }: TotalAccountType) {
  const { cardAddPage, cardEditPage } = usePageState();

  if (cardAddPage) {
    return (<AddCardPage />);
  }

  if (cardEditPage) {
    return <CardEditPage />
  }

  return (<PayPage totalAccount={totalAccount} />);
}

export default PaymentPage;
