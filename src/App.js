import React, { useState } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

const App = props => {
  const [ inputState, setInputState ] = useState({
    input: ''
  });

  const inputChangedHandler = event => {
    setInputState({ input: event.target.value });
  }

  const deleteCharHandler = index => {
    const chars = [...inputState.input.split("")];
    chars.splice(index, 1);
    setInputState({ input: chars.toString() })
  }

  let chars = null;

  chars = (
    <div>
      {inputState.input.split("").map((c, i) => {
        return <CharComponent c={c}
                              click={() => deleteCharHandler(i)}/>
      })}
    </div>
  );

  return (
    <div className="App">
      <input type="text"
             onChange={inputChangedHandler}
             value={inputState.input}/>
      <p>{inputState.input.length}</p>
      <ValidationComponent textLength={inputState.input.length}/>
      {chars}
    </div>
  );
};

export default App;
