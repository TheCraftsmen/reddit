import React, { Component } from 'react';

class Edit extends Component {
  render() {
    return (
      <div>
      <h1>Edit { this.props.params.postId}</h1>
      </div>
    );
  }
}

export default Edit;
