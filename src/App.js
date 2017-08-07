import React, { Component } from 'react';
import {
  Title, Nav, Main
} from './import.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
