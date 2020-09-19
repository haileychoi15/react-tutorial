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

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.25rem',
    fontSize: '1.25rem'
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem'
  }
}

const sizeStyles = css`
  /* 크기 */
  ${ ({ size }) => css` // props 에서 size 만 추출
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
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