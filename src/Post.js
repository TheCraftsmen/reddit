import React from 'react';
import { connect } from 'react-redux';


const Post = ({ posts, id, title, vote }) => {
	console.log("dibuja el post")
	console.log(posts, id, title)
	return(

		<li>
		<div>
			<h5>{ title }</h5>
			<p>{ vote }</p>
		</div>  
		</li>
		)
}


export default connect( state => state, {})(Post);