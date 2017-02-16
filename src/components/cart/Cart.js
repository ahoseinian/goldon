import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {completeCartOrder} from '../../actions'
import CartTable from '../items/TableList'
import getSum from '../../reducers/cart/get-sum'
import PriceSum from './PriceSum'
import CartForm from './CartForm'
import CartEmpty from './CartEmpty'

const Cart = ({cart, fullPrice, completeCartOrder}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      target: {
        elements: {
          tel: {
            value: tel
          },
          address: {
            value: address
          },
          fullname: {
            value: fullname
          }
        }
      }
    } = e;
    const items = cart
      .items
      .map(({id, quantity}) => ({item: id, quantity}))
    completeCartOrder({fullname, tel, address, items}).then(() => browserHistory.push('/cart/finish'))
  }

  return (
    <div>
      {cart.items.length
        ? <CartTable items={cart.items}/>
        : <CartEmpty/>}
      <div className="container">
        <PriceSum sum={fullPrice}/>
        <CartForm submit={handleSubmit} disabled={!cart.items.length}/>
      </div>
    </div>
  )
}

export default connect((state) => ({
  cart: state.cart,
  fullPrice: getSum(state.cart.items)
}), {completeCartOrder})(Cart)
