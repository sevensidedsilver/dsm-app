import React from 'react';
import logo from './logo.svg';
import './styles/css/App.css';
import BadassButton from './components/BadassButton/BadassButton';
import BlueButton from './components/BlueButton/BlueButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <BadassButton txt="click this"></BadassButton>
    </div>
  );
}

export default App;
