import React from 'react';
import { connect } from 'react-redux';


const Post = ({ id, title }) => {
	console.log(id);
	console.log(title);
	console.log("entra");
	return(

		<li> cuca </li>
		)
}


export default connect( state => state, {})(Post);