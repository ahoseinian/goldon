import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import createPromiseMiddleware from 'redux-promise-middleware'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './App';
import Home from './components/Home';
import goldonApp from './reducers'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import 'react-select/dist/react-select.css'
import 'font-awesome/css/font-awesome.css'

const logger = createLogger();
const promiseMiddleware = createPromiseMiddleware();
const store = createStore(goldonApp, applyMiddleware(logger, promiseMiddleware))

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
</Provider>, document.getElementById('root'));
