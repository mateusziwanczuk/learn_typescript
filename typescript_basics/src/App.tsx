import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  sum(a:number, b:number) {
    return a + b
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.sum(2, 15)}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
