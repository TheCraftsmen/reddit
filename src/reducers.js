import { combineReducers } from 'redux';

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

const posts = (state = [], action) => {
  switch(action.type) {
  	default:
      return state;
  }
};


const reducer = combineReducers({editor, posts});
export default reducer;