import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {toggleCartVisibility} from '../../actions/index'
import {Button} from '../common/Button'

const CartButton = styled(Button) `
  display: inline-block;
  margin-right: 1rem;
`
const Icon = styled.span `
  position:relative;
  top: 2px;
  margin-left: .5rem;
`

class Cart extends Component {
  render() {
    const {itemsCount, toggleCartVisibility} = this.props
    return (
      <CartButton onClick={toggleCartVisibility}>
        <Icon className="fa fa-cart-arrow-down"/>
        <span className="mx-1">سبد</span>
        <u className="mx-1">{itemsCount}</u>
      </CartButton>
    )
  }
}
export default connect((state) => ({itemsCount: state.cart.items.length}), {toggleCartVisibility})(Cart)
