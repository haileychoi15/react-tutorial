import React from 'react';
import styled from 'styled-components';
import Button from './Button';


const DarkBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  
  p {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)` // 버튼을 상속받아서 수정
  & + & {
    margin-left: 0.5rem;
  }
`;

function Dialog({ title, children, confirmText, cancelText }) {
    return (
        <DarkBackground>
            <DialogBlock>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <ShortMarginButton color="gray">{cancelText}</ShortMarginButton>
                    <ShortMarginButton color="blue">{confirmText}</ShortMarginButton>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    );
}

Dialog.defaulProps = {
    cancelText: '취소',
    confirmText: '확인'
};

export default Dialog;