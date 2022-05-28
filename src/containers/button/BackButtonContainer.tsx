import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { createPageAction } from '../../context/PageProvider';

import { usePageDispatch } from '../../hooks';
import { PageActionType } from '../../types';

const SvgWrapper = styled.div(() => ({
  width: '30px',
  height: '30px',
}));

function BackButtonContainer() {
  const dispatch = usePageDispatch();

  const handlePayPage = () => {
    dispatch(createPageAction(PageActionType.PAY_PAGE, true));
  };

  return (
    // <Link to="/card">
    <SvgWrapper onClick={handlePayPage}>
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
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </SvgWrapper>
    // </Link>
  );
}

export default BackButtonContainer;
