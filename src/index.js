import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import Router from './containers/Router'
import store from './store'
import {getAllItems} from './actions/index'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import 'react-select/dist/react-select.css'
import 'font-awesome/css/font-awesome.css'

store.dispatch(getAllItems())

ReactDOM.render(
  <Provider store={store}>
  <Router/>
</Provider>, document.getElementById('root'));
