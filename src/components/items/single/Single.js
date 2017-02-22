import React from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'
import ItemImage from '../image/ImageGallery'
import findById from '../../../reducers/items/findById'
import similarItems from '../../../reducers/items/similarItems'
import Details from './Details'
import MainInfo from './MainInfo'

const Wrapper = styled.div `
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const Signle = ({item, addItemToCart, similarItems}) => item
  ? (
    <Wrapper className="container">
      <div className="row">
        <div className="col-sm-4">
          <ItemImage images={item.images}/>
        </div>
        <div className="col-sm-8 mt-2">
          <MainInfo item={item}/>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Details item={item}/>
        </div>
      </div>
    </Wrapper>
  )
  : null

Signle.propTypes = {
  params: React
    .PropTypes
    .shape({id: React.PropTypes.string.isRequired})
};

export default connect((state, {params}) => ({
  item: findById(state.items, params.id),
  similarItems: similarItems(state.items, params.id)
}))(Signle);
