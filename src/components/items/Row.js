import React from 'react'
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

const Row = ({item, removeFromCart}) => (
  <tr>
    <Td>
      <SmallImage id={item.images[0]}/>
    </Td>
    <Td>{item.name}</Td>
    <Td>
      <div className="d-flex">
        <LeftBorder>
          {item.quantity}
        </LeftBorder>
        <Price value={item.price}/>
      </div>
      <Price value={item.price * item.quantity}/>
    </Td>
    <Td className="text-center" onClick={() => item.removeFromCart()}>
      <Icon name="times" />
    </Td>
  </tr>
)

export default Row
