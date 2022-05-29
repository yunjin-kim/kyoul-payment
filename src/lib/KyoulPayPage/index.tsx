import React from 'react';

import AddCardPage from '../../pages/AddCardPage';
import PayPage from '../../pages/PayPage';
import CardEditPage from '../../pages/CardEditPage';

import { usePageState } from '../../hooks';

type TotalAccountType = { totalAccount: number, paySuccessUrl: string, payCancelUrl: string };

function PaymentPage({ totalAccount, paySuccessUrl, payCancelUrl }: TotalAccountType) {
  const { cardAddPage, cardEditPage } = usePageState();

  if (cardAddPage) {
    return (<AddCardPage />);
  }

  if (cardEditPage) {
    return <CardEditPage />
  }

  return (<PayPage totalAccount={totalAccount} paySuccessUrl={paySuccessUrl} payCancelUrl={payCancelUrl} />);
}

export default PaymentPage;
