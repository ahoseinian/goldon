import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router'
import ItemCard from '../../common/Card'
import ItemImage from '../Image'
import PriceRow from './PriceRow'
import Sizes from './Sizes'

const ItemName = styled.div `
  text-align:center;
  font-size: 1.2rem;
  padding-top: .7rem;
  padding-left: 1rem;
  line-height: 1.5rem;
`

const Card = ({item, addItemToCart}) => (
  <Link to={`/items/${item.id}/${item.name}`} className="text-muted">
    <ItemCard className="card">
      <div className="row">
        <div className="col-5">
          <ItemImage id={item.images[0]}/>
        </div>
        <div className="col-7">
          <ItemName>{item.name}</ItemName>
          <PriceRow price={item.price} />
          <Sizes size={item.size} />
        </div>
      </div>
    </ItemCard>
  </Link>
)

export default Card
