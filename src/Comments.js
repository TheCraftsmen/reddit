import React, { Component } from 'react';

class Comments extends Component {
  render() {
    return (
      <div>
      <h1>Comments { this.props.params.postId}</h1>
      </div>
    );
  }
}

export default Comments;