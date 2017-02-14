import React from 'react';
import {connect} from 'react-redux'
import ItemImage from '../Image'
import findById from '../../../reducers/items/findById'
import Price from './Price'
import styled from 'styled-components'
import {color} from '../../theme'

const ItemName = styled.h1`
  color:${color.grey};
  text-align: center;
  line-height: 3rem;
  padding-top: 2rem;
`

const Signle = ({item}) => item
  ? (
    <div className="container">
      <ItemImage id={item.images[0]}/>
      <ItemName>{item.name}</ItemName>
      <Price amount={item.price} />
    </div>
  )
  : null

Signle.propTypes = {
  params: React
    .PropTypes
    .shape({id: React.PropTypes.string.isRequired})
};

export default connect((state, {params}) => ({
  item: findById(state.items, params.id)
}))(Signle);
