import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { createPageAction } from '../../context/PageProvider';

import { usePageDispatch } from '../../hooks';
import { PageActionType } from '../../types';

const Wrapper = styled.div(() => ({
  width: '208px',
  height: '130px',
  backgroundColor: '#E5E5E5',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}));

const SvgWrapper = styled.div(() => ({
  width: '30px',
  height: '30px',
}));

function AddCardButtonContainer() {
  const dispatch = usePageDispatch();

  const handleAddPage = () => {
    dispatch(createPageAction(PageActionType.CARD_ADD_PAGE, true));
  };

  return (
    <Wrapper onClick={handleAddPage}>
      <SvgWrapper>
        <svg
          className="w-1 h-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </SvgWrapper>
    </Wrapper>
  );
}

export default AddCardButtonContainer;
