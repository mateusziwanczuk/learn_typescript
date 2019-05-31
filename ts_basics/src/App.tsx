import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const addNum = (a:number, b:number) => a + b
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {addNum(2,7)}
        </p>
      </header>
    </div>
  );
}

export default App;
