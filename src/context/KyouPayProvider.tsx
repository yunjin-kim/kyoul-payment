import React from 'react';
import AppProvider from '../context/Provider';
import PageProvider from '../context/PageProvider';

function KyoulPayProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <PageProvider>
        {children}
      </PageProvider>
    </AppProvider>
  );
}

export default KyoulPayProvider;
