import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = "Road to learn Reactjs"
  //const and let
  //p15 should use const over var
  const halloWorld = {
    text: 'Welcome to the Road to learn React'
    };
  // can change value inside  
  halloWorld.text = 'Bye Bye React';
    return (
      <div className="App">
        <h2> {helloWorld} </h2>
      </div>
    );
  }
}

export default App;
