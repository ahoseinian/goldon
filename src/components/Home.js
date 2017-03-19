import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getSearchedItems} from '../reducers/search'
import ItemList from './items/list'
import PageHead from './PageHead'
import {Element} from 'react-scroll'

class Home extends Component {
  render() {
    const {items} = this.props
    return (
      <div >
        <PageHead/>
        <div className="container" >
          <Element name="firstInsideContainer">
            <ItemList items={items} />
          </Element>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  items: getSearchedItems(state.items, state.search)
}))(Home)
