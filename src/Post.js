import React from 'react';
import { changeVote } from './actions';
import { connect } from 'react-redux';


const Post = ({ posts, id, title, vote, changeVote }) => {
	return(

		<li>
		<div>
			<h5>{ title }</h5>
			<p>
			<a onClick={ e=> changeVote( id, false)}> - </a> 
			{ vote } 
			<a onClick={ e => changeVote( id, true) }> + </a></p>
		</div>  
		</li>
		)
}


export default connect( state => state, {changeVote})(Post);