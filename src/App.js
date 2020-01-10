import React, { useState } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';

const App = props => {
  const [ inputState, setInputState ] = useState({
    input: ''
  });

  const inputChangedHandler = event => {
    setInputState({ input: event.target.value });
  }

  return (
    <div className="App">
      <input onChange={inputChangedHandler}/>
      <p>{inputState.input.length}</p>
      <ValidationComponent textLength={inputState.input.length}/>
    </div>
  );
};

export default App;
