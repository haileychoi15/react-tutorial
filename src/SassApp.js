import React from 'react';
import './SassApp.scss';
import Button from "./scss/Button";

function App() {
  return (
        <div className="App">
        <div className="buttons">
            <Button size="large">BUTTON</Button>
            <Button>BUTTON</Button>
            <Button size="small">BUTTON</Button>
        </div>
        <div className="buttons">
            <Button size="large" color="pink">BUTTON</Button>
            <Button color="pink">BUTTON</Button>
            <Button size="small" color="pink">BUTTON</Button>
        </div>
        <div className="buttons">
            <Button size="large" color="gray">BUTTON</Button>
            <Button color="gray">BUTTON</Button>
            <Button size="small" color="gray">BUTTON</Button>
        </div>
        <div className="buttons">
            <Button size="large" outline>BUTTON</Button>
            <Button color="gray" outline>BUTTON</Button>
            <Button size="small" color="pink" outline>BUTTON</Button>
        </div>
        <div className="buttons">
            <Button size="large" fullWidth className="customized-button">BUTTON</Button>
            <Button size="large"color="gray" fullWidth>BUTTON</Button>
            <Button size="large" color="pink" fullWidth
                    onClick={() => {console.log('clicked!')}}
                    onMouseMove={() => {console.log('mouse moved!')}}
            >BUTTON</Button>
        </div>
      </div>
  );
}

export default App;
