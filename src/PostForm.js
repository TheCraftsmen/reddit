import React from 'react';
import { connect } from 'react-redux';


const PostForm = ( { data }) => {
	console.log("en el form")
	console.log(data);
	return(
		<input type="text" name="create_post" placeholder="ingrese" />
		)
}


export default connect( state => state, {})(PostForm);