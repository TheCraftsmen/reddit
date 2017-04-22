import React, { Component } from 'react';
import data from './data';
import PostList from './PostList'
import './App.css';

console.log(data)

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hola</h1>
      <PostList posts={ data }/>
      </div>
    );
  }
}

export default App;
