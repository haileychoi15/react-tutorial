import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import Button from './styled-components/Button';

const AppBlock = styled.div`
  width: 512px;
  margin: 4rem auto 0;
  border: 1px solid #000;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
    blue: '#228be6',
    gray: '#495057',
    pink: '#f783ac'
}

function App() {
    return (
        <ThemeProvider theme={{palette}}>
            <AppBlock>
                <ButtonGroup>
                    <Button size="large">BUTTON</Button>
                    <Button>BUTTON</Button>
                    <Button size="small">BUTTON</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button color="gray" size="large">BUTTON</Button>
                    <Button color="gray">BUTTON</Button>
                    <Button color="gray" size="small">BUTTON</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button color="pink" size="large">BUTTON</Button>
                    <Button color="pink">BUTTON</Button>
                    <Button color="pink" size="small">BUTTON</Button>
                </ButtonGroup>
            </AppBlock>
        </ThemeProvider>
    );
}

export default App;