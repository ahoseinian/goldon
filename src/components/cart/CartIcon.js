import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {PrimaryButton} from '../common/Button'
import Icon from '../common/Icon'

class Cart extends Component {
  render() {
    const {itemsCount} = this.props
    return itemsCount
      ? (
        <Link to="/cart">
          <PrimaryButton>
            <Icon name="cart-arrow-down"/>
            <span>سبد</span>
            <u className="mx-1">{itemsCount}</u>
          </PrimaryButton>
        </Link>
      )
      : null
  }
}
export default connect((state) => ({itemsCount: state.cart.items.length}))(Cart)
