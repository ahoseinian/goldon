import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getSearchedItems} from '../reducers/search'
import ItemList from './items/list'

class Home extends Component {
  render() {
    const {items} = this.props
    return (
      <div className="container">
        <ItemList items={items}/>
      </div>
    );
  }
}

export default connect((state) => ({
  items: getSearchedItems(state.items, state.search)
}))(Home)
