import React, { Component } from 'react';
import { filterById } from './actions';
import { connect } from 'react-redux';

class Edit extends Component {

  componentDidMount(){
  	this.props.filterById(this.props.params.postId)
  }

  render() {
    return (
    <div>
      	<h1>Edit { this.props.params.postId }</h1>
		<p>{ this.props.posts.editing }</p>
		<p>{ this.props.posts.id }</p> 
		<p>{ this.props.posts.title }</p> 
   	</div>
    );
  }
}

export default connect( state => state, { filterById })(Edit);