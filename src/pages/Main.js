import React from "react";
import styled, { css } from "styled-components";
import Button from "../components/Button";

function Main() {
  return (
    <>
      <ButtonWrapper>
        <Button>Button</Button>
      </ButtonWrapper>
    </>
  );
}
const ButtonWrapper = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

export default Main;
