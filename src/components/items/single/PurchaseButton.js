import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'
import {Button} from '../../common/Button'
import Icon from '../../common/Icon'
import {addItemToCart} from '../../../actions/index'
import findById from '../../../reducers/items/findById'

const AddButton = styled(Button)`
  padding: 1rem 2rem;
  width: 100%;
  height: 100%;
`

export const PurchaseButton = ({item, addItemToCart, cartItems}) => {
  const itemInCart = findById(cartItems, item.id)
  return (
    <AddButton className="btn-block" onClick={addItemToCart.bind(null, item)}>
      <Icon name="plus"/>
      <div className="d-inline mr-2">
        {!itemInCart
          ? <span className="buy-text">
              خرید
            </span>
          : <div className="d-inline">
            <span>افزودن تعداد درون سبد به</span>
            <u className="mr-2 item-quanity-plus">
              {itemInCart.quantity + 1}
            </u>
          </div>}
      </div>
    </AddButton>
  )
}

PurchaseButton.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  addItemToCart: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired
};

export default connect((state, {item}) => ({cartItems: state.cart.items}), ({addItemToCart}))(PurchaseButton)
