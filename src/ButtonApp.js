import React from 'react';
import './App.scss';
import Button from "./scss/Button";

function ButtonApp() {
  return (
      <div className="App">
        <div className="buttons">
          <Button size="large">Click</Button>
          <Button>Click</Button>
          <Button size="small">Click</Button>
        </div>
      </div>
  );
}

export default ButtonApp;
