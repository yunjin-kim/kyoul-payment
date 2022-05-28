import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const SvgWrapper = styled.div(() => ({
  width: '30px',
  height: '30px',
}));

function BackButton() {
  return (
    <Link to="/card">
      <SvgWrapper>
        <svg
          className="w-1 h-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </SvgWrapper>
    </Link>
  );
}

export default BackButton;
