import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './App';
import Home from './components/Home';
// import Search from './components/search/Search';
import Single from './components/items/single/Single';
import Cart from './components/cart/Cart'
import CartFinish from './components/cart/CartFinish'

const RouterComponent = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      {/* <Route path="/search" component={Search} /> */}
      <Route path="/cart" component={Cart} />
      <Route path="/cart/finish" component={CartFinish} />
      <Route path="/items/:id(/:name)" component={Single} />
      <Route path="*" component={Home}/>
    </Route>
  </Router>
);


export default RouterComponent;
