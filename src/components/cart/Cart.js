import React from 'react'
import {connect} from 'react-redux'
import CartTable from '../items/TableList'
import getSum from '../../reducers/cart/get-sum'
import PriceSum from './PriceSum'
import CartForm from './CartForm'

const Cart = ({cart, fullPrice}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      target: {
        elements: {
          tel,
          address
        }
      }
    } = e;
    this
      .props
      .completeOrder(tel.value, address.value)
  }

  return (
    <div>
      <CartTable items={cart.items}/>
      <div className="container">
        <PriceSum sum={fullPrice}/>
        <CartForm submit={handleSubmit}/>
      </div>
    </div>
  )
}

export default connect((state) => ({
  cart: state.cart,
  fullPrice: getSum(state.cart.items)
}))(Cart)
