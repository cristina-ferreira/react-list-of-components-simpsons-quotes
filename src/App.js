import React, { Component } from 'react';
import Quotes from './Quotes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Simpsons Quotes</h1>
        <Quotes />
      </div>
    );
  }
}

export default App;
