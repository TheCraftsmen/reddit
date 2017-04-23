import React, { Component } from 'react';
import PostList from './PostList'
import PostForm from './PostForm'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hola</h1>
      <PostForm />
      <PostList />
      </div>
    );
  }
}

export default App;
