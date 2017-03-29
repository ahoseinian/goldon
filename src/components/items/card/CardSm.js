import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router'
import ItemCard from '../../common/card/Card'
import ItemImage from '../image/Image'
import PriceRow from './PriceRow'
// import Sizes from './Sizes'

const ItemName = styled.div `
  text-align:center;
  font-size: 1.2rem;
  padding-top: .7rem;
  padding-left: 1rem;
  line-height: 1.5rem;
`

const Card = ({id, name, images, price}) => (
  <Link to={`/items/${id}/${name}`} className="text-muted">
    <ItemCard className="card">
      <div className="row">
        <div className="col-5">
          <ItemImage id={images[0]}/>
        </div>
        <div className="col-7">
          <ItemName>{name}</ItemName>
          <PriceRow price={price} />
        </div>
      </div>
    </ItemCard>
  </Link>
)

Card.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  images: React.PropTypes.arrayOf(React.PropTypes.string),
  price: React.PropTypes.number,
}

export default Card
