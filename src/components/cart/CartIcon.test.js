import React from 'react'
import {shallow, mount} from 'enzyme'
import CartIcon from './CartIcon'
import store from '../../store'
import {addItemToCart} from '../../actions'
import {Provider} from 'react-redux'

describe('CartIcon', () => {
  it('renders', () => {
    const wrapper = shallow(<CartIcon store={store}/>)
  })

  it('shows correct item count', () => {
    store.dispatch(addItemToCart({id:'1'}))
    store.dispatch(addItemToCart({id:'2'}))
    const wrapper = mount( <CartIcon store={store}/> )
    expect(
      wrapper.find('.items-in-cart-count').first().text()
    ).toEqual("2")
  })

})
