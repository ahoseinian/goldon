import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import createPromiseMiddleware from 'redux-promise-middleware'
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
  <App/>
</Provider>, document.getElementById('root'));
