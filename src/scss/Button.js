import React from 'react';
import classNames from 'classnames';

import './Button.scss';

// size: large, medium, small
// color: blue, pink, gray
function Button({ children, size, color, outline, fullWidth, className, ...rest }) {
  console.log(rest); // Object: {onClick: ƒ, onMouseMove: ƒ}
  return <button className={classNames('Button', size, color, {
            outline,
            fullWidth
          },
            className
          )}
            {...rest}
          >
            {children}
         </button>
}

// outline와 fullWidth은 boolean 타입이기때문에 파라미터로 안넘어오면 undefined이다.
// 그러면 classNames에서 처리하지 않기 때문에 기본값 설정해 줄 필요없다.

Button.defaultProps = {
  size: 'medium',
  color: 'blue'
};

export default Button;