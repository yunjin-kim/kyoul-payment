import React from 'react';

import { usePageState } from '../../hooks';
import AddCardPage from '../AddCardPage';
import PayPage from '../PayPage';
import CardEditPage from '../CardEditPage';

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
