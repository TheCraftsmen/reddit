import { combineReducers } from 'redux';
import data from './data';

const initialStateEditor = {
  title: ''
};
const SUBMIT_POST = 'SUBMIT_POST';
const TITLE_CHANGE = 'TITLE_CHANGE';

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

const posts = (state = data, action) => {
  switch(action.type) {
  	case SUBMIT_POST:
      return [
        Object.assign({}, action.post, {id: getNextId(state) }), ...state
      ];
  	default:
      return state;
  }
};


const reducer = combineReducers({editor, posts});
export default reducer;