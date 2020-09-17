import React, { useState, useReducer, useMemo, useCallback, createContext} from 'react';
import Counter from "./Counter";
import ContextSample from "./ContextSample";

function App() {
  return (
      <div className="App">
        <Counter />
      </div>
  );
}

export default App;
