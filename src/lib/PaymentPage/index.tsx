import React from 'react';

import { usePageState } from '../../hooks';
import AddCardPage from '../AddCardPage';
import PayPage from '../PayPage';
import CardEditPage from '../CardEditPage';

function PaymentPage() {
  const { cardAddPage, cardEditPage } = usePageState();

  if (cardAddPage) {
    return (<AddCardPage />);
  }

  if (cardEditPage) {
    return <CardEditPage />
  }

  return (<PayPage />);
}

export default PaymentPage;
