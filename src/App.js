import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const name = 'Median';
const age = 24;
const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      name: name,
      age: age,
    };
    // this.onDismiss = this.onDismiss.bind(this);
  }
  // onDismiss(id) {
  //   const updatedList = this.state.list.filter(function isNotId(item) {
  //     return item.objectID !== id;
  //   });
  // }

  onDismiss(id) {
    function isNotId(item) {
      return item.objectID !== id;
    }
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        {this.state.list.map(item => {
          const onHandleDismiss = () =>
            this.onDismiss(item.objectID);

          return(
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title} </a>
              </span>
              <span>{item.author} </span>
              <span>{item.num_comments} </span>
              <span>{item.points} </span>
              <span>{this.state.name} </span>
              <span>{this.state.age} </span>
              <span>
                <button onClick={function () {
                  
                console.log(item.objectID)}}
                
                type="button">
                  Dismiss
                </button>
              </span>

            </div>
          );
        }
        )
        }
      </div>
    );
  }
}

export default App;
