import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  /* 색상 */
  ${({ theme, color}) => { // props 를 함수로 가져오는 코드, 비구조화 할당
  const selected = theme.palette[color];
  return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `
}};  
`;

const sizeStyles = css`
  /* 크기 */
  ${props =>
  props.size === 'large' &&
  css`
    height: 3rem;
    font-size: 1.25rem;
  `}
  ${props =>
    props.size === 'medium' &&
    css`
    height: 2.25rem;
    font-size: 1rem;
  `}
    ${props =>
    props.size === 'small' &&
    css`
    height: 1.75rem;
    font-size: 0.875rem;
  `}
`;

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
  
  ${sizeStyles}
  ${colorStyles}
  
  /* 기타 */
  & + & {
    margin-left: 1rem;  
  }
`;

function Button({ children, color, size, ...rest }) {
  console.log(color, size);
  return (
      <StyledButton color={color} size={size} {...rest}>{children}</StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium'
};

export default Button;