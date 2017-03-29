import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import ItemCard from '../../common/card/Card'
import {addItemToCart} from '../../../actions'
import ItemImage from '../image/Image'
import Sizes from './Sizes'
import PriceRow from './PriceRow'


const ItemName = styled.div `
  text-align:center;
  font-size: 1.2rem;
  line-height: 4rem;
  max-height: 4rem;
`

export const Card = ({item, addItemToCart}) => (
  <ItemCard className="card">
    <ItemName>{item.name}</ItemName>
    <ItemImage id={item.images[0]}/>
    <PriceRow price={item.price} handleClick={addItemToCart}/>
    <Sizes size={item.size}/>
  </ItemCard>
)

Card.propTypes = {
  item: React.PropTypes.shape({
    name: React.PropTypes.string,
    images: React.PropTypes.array,
    price: React.PropTypes.number,
    size: React.PropTypes.object
  }),
  addItemToCart: React.PropTypes.func
}

export default connect(null, ({addItemToCart}))(Card)
