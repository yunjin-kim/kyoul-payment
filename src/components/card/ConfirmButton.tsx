import React from 'react';

import styled from '@emotion/styled';

const ConfirmButtonStyled = styled.button({
  marginLeft: '280px',
  backgroundColor: 'inherit',
  border: 'none',
  fontSize: '16px',
  fontWeight: '500',
  cursor: 'pointer',
});

type Props = {
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: (event: React.MouseEvent) => void;
  disabled?: boolean;
  id: string;
  children: React.ReactNode;
};

function ConfirmButton({ type, onClick, disabled, id,  children }: Props) {
  return (
    <ConfirmButtonStyled type={type} onClick={onClick} {...(disabled ? { disabled: true } : '') } id={id}>
      {children}
    </ConfirmButtonStyled>
  );
}

export default ConfirmButton;
