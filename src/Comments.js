import React, { Component } from 'react';
import { commentsByPostId } from './actions';
import { connect } from 'react-redux';



class Comments extends Component {

  componentDidMount(){
  	this.props.commentsByPostId(this.props.params.postId)
  }

  render() {
  	console.log(this.props.comments.post_id)
  	var lista = []
  	for(var a in this.props.comments.comments){
  		lista.push(this.props.comments.comments[a].comment)
  	}
  	console.log(lista)
    return (
      <div>
      <h1>Comments { this.props.params.postId } </h1>
      <p>{ this.props.comments.post_id }</p>
      {
      	lista.map( l => (<p>{ l }</p>))
      }
      </div>
    );
  }
}

export default connect( state => state, { commentsByPostId })(Comments);