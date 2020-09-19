import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  /* 공통스타일 */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  padding: {
    left: 1rem;
    right: 1rem;
  };
  
  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;
  
  /* 색상 */
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }
  
  /* 기타 */
  & + & {
    margin-left: 1rem;  
  }
`;

function Button({ children, ...rest }) {
  return (
      <StyledButton {...rest}>{children}</StyledButton>
  );
}

export default Button;