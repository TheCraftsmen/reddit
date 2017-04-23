import { combineReducers } from 'redux';
import data from './data';

const initialStateEditor = {
  title: '',
  summary: ''
};


const editor = (state = initialStateEditor, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const posts = (state = data, action) => {
  switch(action.type) {
  	default:
      return state;
  }
};


const reducer = combineReducers({editor, posts});
export default reducer;