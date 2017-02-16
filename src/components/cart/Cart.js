import React from 'react'
import {connect} from 'react-redux'
import CartTable from '../items/TableList'
import CheckOutBar from './CheckOutBar'
import getSum from '../../reducers/cart/get-sum'

const Cart = ({cart, fullPrice}) => (
  <div>
    <CartTable items={cart.items}/>
    <CheckOutBar price={fullPrice}/>
  </div>
)

export default connect((state) => ({
  cart: state.cart,
  fullPrice: getSum(state.cart.items)
}))(Cart)
