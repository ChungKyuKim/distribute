import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
const StyledButton = styled.button`
  display: flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  height: 2.25rem;
  font-size: 1rem;

  background: #228be6;
  &:hover {
    background: red;
  }
  &:active {
    background: green;
  }
`;

export default Button;
