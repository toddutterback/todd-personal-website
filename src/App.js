import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todd Utterback</h1>
        </header>
        <p className="App-intro">
          This is a placeholder website for the domain toddutterback.com until another Todd Utterback offers to buy it from me. Until then,
        </p>
        <br />
        <p className="App-intro">
          I&#39;m a software developer, runner &#40;2x marathoner&#41;, avid reader &#40;check out what I&#39;m reading&#41;
        </p>
      </div>
    );
  }
}

export default App;
