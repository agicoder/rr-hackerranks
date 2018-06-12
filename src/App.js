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

function isSearchedES5(searchTerm) {
  return function (item) {
    // some condition which returns true or false
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    // return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1; ES5
  }
}

const isSearched = searchTerm => item =>
item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      name: name,
      age: age,
      searchTerm: '',
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    // this.onDismiss = this.onDismiss.bind(this);
  }
  // onDismiss(id) {
  //   const updatedList = this.state.list.filter(function isNotId(item) {
  //     return item.objectID !== id;
  //   });
  // }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    function isNotId(item) {
      return item.objectID !== id;
    }
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      
      <div className="App">
        <form>
          <input type="text" onChange={this.onSearchChange} />
        </form>
        {list.filter(isSearched(searchTerm)).map(item => {
        {/* {this.state.list.filter(isSearched(this.state.searchTerm)).map(item => { */}
        {/* {this.state.list.map(item => { */}
          const onHandleDismiss = () =>
            this.onDismiss(item.objectID);
          return (
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
                <button onClick={() => this.onDismiss(item.objectID)}

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
