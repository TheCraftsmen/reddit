import React from 'react';
import { connect } from 'react-redux';


const Post = ({ id, title }) => {
	return(

		<li> { title } </li>
		)
}


export default connect( state => state, {})(Post);