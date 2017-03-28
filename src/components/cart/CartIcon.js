import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {PrimaryButton} from '../common/Button'
import Icon from '../common/Icon'


const Cart = ({itemsCount}) => (
  <Link to="/cart" className="my-2">
    <PrimaryButton>
      <Icon name="cart-arrow-down"/>
      <span>سبد</span>
      <u className="mx-1 items-in-cart-count">{itemsCount}</u>
    </PrimaryButton>
  </Link>
)

Cart.propTypes = {
  itemsCount: React.PropTypes.number.isRequired
}

export default connect((state) => ({itemsCount: state.cart.items.length}))(Cart)
