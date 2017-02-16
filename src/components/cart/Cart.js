import React from 'react'
import {connect} from 'react-redux'
import CartTable from '../items/TableList'
import getSum from '../../reducers/cart/get-sum'
import PriceSum from './PriceSum'

const Cart = ({cart, fullPrice}) => (
  <div>
    <CartTable items={cart.items}/>
    <div className="container">
      <PriceSum sum={fullPrice} />
    </div>
  </div>
)

export default connect((state) => ({
  cart: state.cart,
  fullPrice: getSum(state.cart.items)
}))(Cart)
