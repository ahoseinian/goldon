import React from 'react';
import {connect} from 'react-redux'
import {Element} from 'react-scroll'
import {Helmet} from 'react-helmet'
import {getSearchedItems} from '../reducers/search'
import ItemList from './items/list'
import PageHead from './PageHead'

export const Home = ({items}) => (
  <div>
    <Helmet>
      <title>میاریم</title>
    </Helmet>
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
