import React, { Component } from 'react';
import {
  Title, Nav, Main, Input
} from './import.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title>A Title</Title>
        <Nav>A Nav Bar</Nav>
        <Main>
          <Input />
        </Main>
      </div>
    );
  }
}

export default App;
