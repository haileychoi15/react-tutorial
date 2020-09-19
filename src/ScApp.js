import React from "react";
import styled, { css } from 'styled-components';
import Button from './styled-components/Button';

const AppBlock = styled.div`
  width: 512px;
  margin: 4rem auto 0;
  border: 1px solid #000;
  padding: 1rem;
`;

/*const Circle = styled.div`
    width: 5em;
    height: 5rem;
    background: ${props => props.color};
    border-radius: 50%;
    ${props => props.huge 
        && css`
        width: 10rem;
        height: 10rem;
        ` 
    }
`;*/

function App() {
    return (
        <AppBlock>
            <Button>BUTTON</Button>
        </AppBlock>
    );
}

export default App;