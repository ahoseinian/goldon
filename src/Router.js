import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './App';
import Home from './components/Home';
import Search from './components/search/Search';
import Single from './components/items/single/Single';

const RouterComponent = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/search" component={Search} />
      <Route path="/items/:id" component={Single} />
    </Route>
  </Router>
);


export default RouterComponent;
