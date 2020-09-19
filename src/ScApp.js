import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './styled-components/Button';
import Dialog from "./styled-components/Dialog";

const AppBlock = styled.div`
  width: 512px;
  margin: 4rem auto 0;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
    const [dialog, setDialog] = useState(false);
    const onClick = () => {
        setDialog(true);
    };
    const onConfirm = () => {
        console.log('확인');
        setDialog(false);
    };
    const onCancel = () => {
        console.log('취소');
        setDialog(false);
    };

    return (
        <ThemeProvider
            theme={{
                palette: {
                    blue: '#228be6',
                    gray: '#495057',
                    pink: '#f06595'
                }
            }}
        >
            <>
            <AppBlock>
                <ButtonGroup>
                    <Button size="large">BUTTON</Button>
                    <Button color="pink">BUTTON</Button>
                    <Button color="gray" size="small" onClick={onClick}>삭제</Button>
                </ButtonGroup>
            </AppBlock>
            <Dialog
                title="삭제 확인"
                confirmText="확인"
                cancelText="취소"
                visible={dialog}
                onConfirm={onConfirm}
                onCancel={onCancel}
            >
                데이터를 정말로 삭제하시겠습니까?
            </Dialog>
            </>
        </ThemeProvider>
    );
}

export default App;