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

export class Cart extends React.Component {
  static propTypes = {
    cart: React.PropTypes.shape({
      items: React.PropTypes.arrayOf(React.PropTypes.object)
    }).isRequired,
    fullPrice: React.PropTypes.number.isRequired
  }

  construct(){
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const tel = e.target.elements.tel.value
    const address = e.target.elements.address.value
    const fullname = e.target.elements.fullname.value

    const items = this.props.cart.items.map(({id, quantity}) => ({item: id, quantity}))
    this.props.completeCartOrder({fullname, tel, address, items})
      .then(() => browserHistory.push('/cart/finish'))
  }

  render() {
    const {cart, fullPrice} = this.props
    return (
      <div>
        <h1 className="text-center py-3 my-3">سبد خرید</h1>
        {cart.items.length
          ? <div className="container">
              <CartTable items={cart.items}/>
              <SingleRowTable name="مجموع">
                <Price value={fullPrice}/>
              </SingleRowTable>
              <CartForm submit={this.handleSubmit} disabled={!cart.items.length}/>
            </div>
          : <CartEmpty/>}

      </div>
    )
  }
}


export default connect((state) => ({
  cart: state.cart,
  fullPrice: getSum(state.cart.items)
}), {completeCartOrder})(Cart)
