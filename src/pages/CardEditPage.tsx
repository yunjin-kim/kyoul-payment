import React from 'react';

import BackButton from '../components/button/BackButton';

import CardContainer from '../containers/card/CardContainer';
import CardFormContainer from '../containers/card/CardFormContainer';
import TypeButtonModal from '../containers/modal/TypeButtonModalContainer';
import CardCompleteContainer from '../containers/card/CardCompleteContainer';
import PageTitle from '../components/navigater/PageTitle';

import { useAppState } from '../hooks';

import { MarginWrapper, PageWrapper, TitleWrapper } from './style';

function CardEditPage() {
  const { completeCard, changeCardType } = useAppState();

  return (
    <PageWrapper>
      {changeCardType && <TypeButtonModal />}
      {completeCard ? (
        <CardCompleteContainer />
      ) : (
        <>
          <TitleWrapper>
            <BackButton />
            <MarginWrapper marginRight="20px" />
            <PageTitle>카드수정</PageTitle>
          </TitleWrapper>
          <CardContainer />
          <CardFormContainer />
        </>
      )}
    </PageWrapper>
  );
}

export default CardEditPage;
