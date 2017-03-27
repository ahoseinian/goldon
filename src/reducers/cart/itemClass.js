import store from '../../store'
import {removeFromCart} from '../../actions'
export default class Item {
  constructor(props){
    Object.assign(this, props)
    this.removeFromCart = this.removeFromCart.bind(this)
  }

  removeFromCart(){
    return store.dispatch(removeFromCart(this))
  }
}
