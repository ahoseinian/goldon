import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import ItemCard from '../../common/Card'
import {addItemToCart} from '../../../actions'
import ItemImage from '../Image'
import Sizes from './Sizes'
import PriceRow from './PriceRow'


const ItemName = styled.div `
  text-align:center;
  font-size: 1.2rem;
  line-height: 4rem;
  max-height: 4rem;
`

const Card = ({item, addItemToCart}) => (
  <ItemCard className="card">
    <ItemName>{item.name}</ItemName>
    <ItemImage id={item.images[0]}/>
    <PriceRow price={item.price} handleClick={addItemToCart.bind(null, item)}/>
    <Sizes size={item.size}/>
  </ItemCard>
)

export default connect(null, ({addItemToCart}))(Card)
