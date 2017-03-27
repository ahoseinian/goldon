import React from 'react'
import {shallow, mount} from 'enzyme'
import Cart from './Cart'
import store from '../../store'
import CartEmpty from './CartEmpty'
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer'
import {addItemToCart} from '../../actions'
import shortid from 'shortid'

describe('Cart', () => {
  it('renders', () => {
    const wrapper = shallow(<Cart store={store}/>)
    expect(
      console.error.called
    ).toEqual(false)
  })

  it('renders CartEmpty when items are null', () => {
    const wrapper = renderer.create(
        <Cart store={store}/>
    ).toJSON()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders items when it has items', () => {
    store.dispatch(addItemToCart({images:[], price: 2000, id:shortid.generate()}))
    const wrapper = renderer.create(
      <Cart store={store}/>
    ).toJSON()
    expect(wrapper).toMatchSnapshot()
  })

})
