import React from 'react';
import logo from './logo.svg';
import './App.css';

const names = ["whale", "squid", "turtle", "coral", "starfish"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul>{names.map(name => <li key={name}> {name} </li>)}</ul>
    </div>
  );
}

export default App;
