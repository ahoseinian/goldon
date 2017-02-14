import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import Router from './Router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import 'react-select/dist/react-select.css'
import 'font-awesome/css/font-awesome.css'


ReactDOM.render(
  <Provider store={store}>
  <Router/>
</Provider>, document.getElementById('root'));
