import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import ItemCard from '../../common/Card'
import {addItemToCart} from '../../../actions'
import ItemImage from '../Image'
import PriceRow from './PriceRow'

const ItemName = styled.div `
  text-align:center;
  font-size: 1.2rem;
  padding-top: .3rem;
  padding-left: 1rem;
  max-height: 1.5rem;
  line-height: 1.5rem;
  overflow: hidden;
`

const Card = ({item, addItemToCart}) => (
  <Link to={`/items/${item.id}/${item.name}`}>

    <ItemCard className="card">
      <div className="row">
        <div className="col-5">
          <ItemImage id={item.images[0]}/>
        </div>
        <div className="col-7">
          <ItemName>{item.name}</ItemName>
          <PriceRow price={item.price} handleClick={addItemToCart.bind(null, item)}/>
        </div>
      </div>
    </ItemCard>
  </Link>
)

export default connect(null, ({addItemToCart}))(Card)
