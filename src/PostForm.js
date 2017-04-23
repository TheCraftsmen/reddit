import React from 'react';
import { titleChange, submitPost } from './actions';
import { connect } from 'react-redux';


const PostForm = ( data ) => {
	return(
		<div>
			<input type="text" value={ data.editor.title } onChange={ 
				e => data.titleChange(e.target.value) }/>
			<button onClick={ 
				e => data.submitPost({ "title": data.editor.title}) } >asignar</button>
		</div>
		)
}


export default connect( state => state, { titleChange, submitPost })(PostForm);