import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = "Road to learn Reactjs"
    //const and let
    // allowed
  const halloWorld = {
    text: 'Welcome to the Road to learn React'
    };
  halloWorld.text = 'Bye Bye React';
    return (
      <div className="App">
        <h2> {helloWorld} </h2>
      </div>
    );
  }
}

export default App;