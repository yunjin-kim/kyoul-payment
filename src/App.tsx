import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';

import AppProvider from './context/Provider';
import PageProvider from './context/PageProvider';

import AddCardPage from './pages/AddCardPage';
import CardListPage from './pages/CardListPage';
import CardEditPage from './pages/CardEditPage';
import CardPayPage from './pages/CardPayPage';
import WrongPathPage from './pages/WrongPathPage';
import PaymentPage from './lib/KyoulPayPage';

import { initial } from './styles/global';

function App() {
  return (
    <AppProvider>
      <PageProvider>
        <Global styles={initial} />
          <PaymentPage totalAccount={1000} paySuccessUrl="/" payCancelUrl="/"/>
        {/* <Routes>
          <Route
            path="/"
            element={<PaymentPage totalAccount={1000} paySuccessUrl="/" payCancelUrl="/" />}
          />
          <Route path="/card" element={<CardListPage />} />
          <Route path="/card/add" element={<AddCardPage />} />
          <Route path="/card/edit/*" element={<CardEditPage />} />
          <Route path="/card/pay/*" element={<CardPayPage />} />
          <Route path="*" element={<WrongPathPage />} />
        </Routes> */}
      </PageProvider>
    </AppProvider>
  );
}

export default App;
