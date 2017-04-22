import React from 'react';
import { connect } from 'react-redux';


const PostForm = () => {

	return(
		<input type="text" name="create_post" placeholder="ingrese" >
		)
}


export default connect( state => state, {})(PostForm);