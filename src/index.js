import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import App from './App';
import Edit from './Edit';
import Add from './Add';
import Comments from './Comments';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';
import './index.css';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={App} />
      <Route path="/add" component={Add}/>
      <Route path="/edit/:postId" component={Edit}/>
      <Route path="/comments/:postId" component={Comments}/>	
    </Router>
  </Provider>,
  document.getElementById('root')
);
