import React, { forwardRef, useEffect } from 'react';
import styled from '@emotion/styled';

import Card from '../../components/card/Card';

import DeleteButtonContainer from '../button/DeleteButtonContainer';
import EditButtonContainer from '../../containers/button/EditButtonContainer';
import AddCardButtonContainer from '../../containers/button/AddCardButtonContainer'; 

import { useAppState, useCard } from '../../hooks';
import { CardType } from '../../types';
import { CardWrapper } from './style';
import { css } from '@emotion/react';
import { FlexWrapper } from '../../pages/style';

type Props = {
  flexDirection: string;
  marginRight?: string;
  marginBottom?: string;
};

const CardAlias = styled.p(() => ({
  fontWeight: '800',
  textAlign: 'center',
}));

const CardButtonWrapper = styled.div(() => ({
  width: '70px',
  display: 'flex',
  justifyContent: 'space-between',
}));

const Wrapper = styled.div(
  css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  (props: any) => ({ flexDirection: props.flexDirection }),
);

const AddCardTextWrapper = styled.p(() => ({
  fontSize: '1rem',
  margin: 'auto',
  marginTop: '10px',
}))

const CardListContainer = forwardRef<HTMLDivElement, Props>(
  ({ flexDirection, marginRight, marginBottom }, ref) => {
    const { cardList } = useAppState();

    return (
      <Wrapper flexDirection={flexDirection} ref={ref}>
        {cardList.length > 0 &&
          cardList.map((card: CardType) => (
            <CardWrapper key={card.alias} marginRight={marginRight} marginBottom={marginBottom}>
              <Card
                firstInputCardNumber={card.firstCardNumber}
                secondInputCardNumber={card.secondCardNumber}
                thirdInputCardNumber={card.thirdCardNumber}
                fourthInputCardNumber={card.fourthCardNumber}
                name={card.ownerName ? card.ownerName : ''}
                expiredPeriodMonth={card.month}
                expiredPeriodYear={card.year}
                cardType={card.type}
              />
              <FlexWrapper justifyContent="space-between">
                <CardAlias>{card.alias}</CardAlias>
                <CardButtonWrapper>
                  <EditButtonContainer id={card.id} />
                  <DeleteButtonContainer id={card.id} />
                </CardButtonWrapper>
              </FlexWrapper>
            </CardWrapper>
          ))}
        <FlexWrapper flexDirection="column">
          <AddCardButtonContainer />
          <AddCardTextWrapper>카드 추가</AddCardTextWrapper>
        </FlexWrapper>
      </Wrapper>
    );
  },
);
// }

export default CardListContainer;
