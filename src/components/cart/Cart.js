import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {completeCartOrder} from '../../actions'
import CartTable from '../items/TableList'
import getSum from '../../reducers/cart/get-sum'
import Price from '../items/Price'
import CartForm from './CartForm'
import CartEmpty from './CartEmpty'
import SingleRowTable from '../common/SingleRowTable'

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
      <h1 className="text-center py-3 my-3">سبد خرید</h1>
      {cart.items.length
        ? <div className="container">
            <CartTable items={cart.items}/>
            <SingleRowTable name="مجموع">
              <Price value={fullPrice}/>
            </SingleRowTable>
            <CartForm submit={handleSubmit} disabled={!cart.items.length}/>
          </div>
        : <CartEmpty/>}

    </div>
  )
}

export default connect((state) => ({
  cart: state.cart,
  fullPrice: getSum(state.cart.items)
}), {completeCartOrder})(Cart)
