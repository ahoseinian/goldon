import React, {Component} from 'react'
import {connect} from 'react-redux'
import {toggleCartVisibility} from '../../actions/index'
import {PrimaryButton} from '../common/Button'
import Icon from '../common/Icon'


class Cart extends Component {
  render() {
    const {itemsCount, toggleCartVisibility} = this.props
    return (
      <PrimaryButton onClick={toggleCartVisibility}>
        <Icon name="cart-arrow-down"/>
        <span className="mx-1">سبد</span>
        <u className="mx-1">{itemsCount}</u>
      </PrimaryButton>
    )
  }
}
export default connect((state) => ({itemsCount: state.cart.items.length}), {toggleCartVisibility})(Cart)
