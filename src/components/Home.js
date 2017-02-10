import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getAllItems} from '../actions'
import {getSearchedItems} from '../reducers/search'
import ItemList from './items/list'


class Home extends Component {
  componentDidMount() {
    this
      .props
      .getAllItems()
  }
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
}), (dispatch) => ({
  getAllItems: () => dispatch(getAllItems())
}))(Home);
