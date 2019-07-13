import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/types';
import './components/functions';
import './components/generics';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
