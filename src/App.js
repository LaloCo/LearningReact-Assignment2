import React, { useState } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

const App = props => {
  const [ inputState, setInputState ] = useState({
    input: ''
  });

  const inputChangedHandler = event => {
    setInputState({ input: event.target.value });
  }

  const deleteCharHandler = index => {
    const chars = inputState.input.split('');
    chars.splice(index, 1);
    setInputState({ input: chars.join('') })
  }

  let chars = null;

  chars = (
    <div>
      {inputState.input.split('').map((c, i) => {
        return <Char c={c}
                     click={() => deleteCharHandler(i)}
                     key={i}/>
      })}
    </div>
  );

  return (
    <div className="App">
      <input type="text"
             onChange={inputChangedHandler}
             value={inputState.input}/>
      <p>{inputState.input.length}</p>
      <Validation textLength={inputState.input.length}/>
      {chars}
    </div>
  );
};

export default App;
