import React from 'react';
import { changeVote, changeEditing, changeTitle, verifyEnter } from './actions';
import { connect } from 'react-redux';


const Post = ({ posts, id, title, vote, editing, changeVote, changeEditing, changeTitle, verifyEnter }) => {
	return(

		<li>
		<div>
			{ editing ? 
				<input autoFocus
				type="text" 
				defaultValue={ title} 
				onChange={ e => changeTitle(id, e.target.value)}
				onKeyPress={ e => verifyEnter(id, e.key)} 
				onBlur={ e => changeEditing(id, false) }/> :
				<h5 onClick={ e => changeEditing(id, true) }>{ title }</h5> } 
			<p>
			<a onClick={ e=> changeVote( id, false)}> - </a> 
			{ vote } 
			<a onClick={ e => changeVote( id, true) }> + </a></p>
		</div>  
		</li>
		)
}


export default connect( state => state, {changeVote, changeEditing, changeTitle, verifyEnter})(Post);