import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import data from './data';

const initialStateEditor = {
  title: '',
  vote: 0
};
const SUBMIT_POST = 'SUBMIT_POST';
const TITLE_CHANGE = 'TITLE_CHANGE';
const CHANGE_VOTE = 'CHANGE_VOTE';
const CHANGE_EDITING = 'CHANGE_EDITING';
const CHANGE_TITLE = 'CHANGE_TITLE';
const VERIFY_ENTER = 'VERIFY_ENTER';
const FILTER_BY_ID = 'FILTER_BY_ID';

const getNextId = posts => {
  return posts.reduce((max, post) => {
    if(post.id > max)
      max = post.id;
    return max;
  }, 0) + 1;
};

const editor = (state = initialStateEditor, action) => {
  switch(action.type) {
  	case TITLE_CHANGE:
      return Object.assign({}, state, {title: action.title});
    default:
      return state;
  }
};


var comments_data = [
  {
    post_id: 1,
    comments: [
    {comment: "bla blas", author: "blas"},
    {comment: "bla blas", author: "blas"},
    {comment: "bla blas", author: "blas"}]
  },
  {
    post_id: 2,
    comments: [
    {comment: "bla blas", author: "blas"},
    {comment: "bla blas", author: "blas"},
    {comment: "bla blas", author: "blas"}]
  },

]

const comments = (state = comments_data, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const posts = (state = data, action) => {
  switch(action.type) {
  	case SUBMIT_POST:
      return [
        Object.assign({}, action.post, {
          id: getNextId(state), 
          vote: 0,
          editing: false }), ...state
      ];
    case CHANGE_VOTE:
      state.map(post => {if(post.id === action.id){
        post.vote += (action.status === true) ? 1 : -1;
      }});
      return [...state];
    case CHANGE_EDITING:
      state.map(post => {if(post.id === action.id){
        post.editing = action.status;
      }});
      return [...state];
    case CHANGE_TITLE:
      state.map(post => {if(post.id === action.id){
        post.title = action.title;
      }});
      return [...state];
    case VERIFY_ENTER:
      state.map(post => {if(post.id === action.id && action.key === "Enter"){
        post.editing = false;
      }});
      console.log(state, action)
      return [...state];
    case FILTER_BY_ID:
      let new_state = state.filter(post => post.id == action.id )
      return Object.assign({}, new_state[0]);
  	default:
      return state;
  }
};


const reducer = combineReducers({editor, posts, comments, routing: routerReducer});
export default reducer;