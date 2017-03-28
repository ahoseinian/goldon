import React from 'react';
import {connect} from 'react-redux'
import {getSearchedItems} from '../reducers/search'
import ItemList from './items/list'
import PageHead from './PageHead'
import {Element} from 'react-scroll'

const Home = ({items}) => (
  <div>
    <PageHead/>
    <div className="container">
      <Element name="firstInsideContainer">
        <ItemList items={items}/>
      </Element>
    </div>
  </div>
)

Home.propTypes = {
  items: React.PropTypes.arrayOf(
    React.PropTypes.object
  ).isRequired
}

export default connect((state) => ({
  items: getSearchedItems(state.items, state.search)
}))(Home)
