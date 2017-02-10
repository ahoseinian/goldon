import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getAllItems} from './actions'
import {getSearchedItems} from './reducers/search'
import PageHead from './components/PageHead'
import ItemList from './components/items/list'
import Search from './components/items/Search'
import TopBar from './components/TopBar'

class App extends Component {
  componentDidMount() {
    this
      .props
      .getAllItems()
  }
  render() {
    const {items} = this.props
    return (
      <div>
        <TopBar/>
        <PageHead/>
        <div className="container">
          <Search/>
          <ItemList items={items}/>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  items: getSearchedItems(state.items, state.search)
}), (dispatch) => ({
  getAllItems: () => dispatch(getAllItems())
}))(App);
