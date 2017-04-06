import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../../actions'
import SmallImage from './image/SmallImage'
import Price from './Price'
import styled from 'styled-components'
import {color} from '../theme'
import Icon from '../common/Icon'

const Td = styled.td `
  vertical-align: middle !important;
`
const LeftBorder = styled.div `
  border-left: 1px solid ${color.light};
  margin-left: 1rem;
  padding-left: 1rem;
`

export const Row = ({id, images, name, quantity, price, removeFromCart}) => (
  <tr>
    <Td>
      { images &&
        <SmallImage id={images[0]}/>
      }
    </Td>
    <Td>{name}</Td>
    <Td>
      <div className="d-flex">
        <LeftBorder>
          {quantity}
        </LeftBorder>
        <Price value={price}/>
      </div>
      <Price value={price * quantity}/>
    </Td>
    <Td className="text-center remove-from-cart" onClick={() => removeFromCart(id)}>
      <Icon name="times" />
    </Td>
  </tr>
)

Row.propTypes = {
  id: React.PropTypes.string.isRequired,
  images: React.PropTypes.array,
  price: React.PropTypes.number.isRequired,
  quantity: React.PropTypes.number.isRequired,
  removeFromCart: React.PropTypes.func
}

export default connect(null, {removeFromCart})(Row)
