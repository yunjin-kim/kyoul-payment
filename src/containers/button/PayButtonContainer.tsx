import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PayButtonStyled = styled.button(
  css`
    width: 148px;
    height: 40px;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
  `,
);

type PropsType = {
  pathName: string,
  children: string,
}

function PayButtonContainer({ pathName, children }: PropsType) {

  const handlePayButton = () => {
    window.location.pathname = pathName;
  }

  return (<PayButtonStyled onClick={handlePayButton}>{children}</PayButtonStyled>)
}

export default PayButtonContainer;
