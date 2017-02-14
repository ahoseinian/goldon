import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './App';
import Home from './components/Home';
import Search from './components/search/Search';

const RouterComponent = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/search" component={Search} />
    </Route>
  </Router>
);


export default RouterComponent;
