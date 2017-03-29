import React from 'react'
import {shallow} from 'enzyme'
import {Cart} from './Cart'
import store from '../../store'
import CartEmpty from './CartEmpty'
import CartTable from '../items/TableList'
import renderer from 'react-test-renderer'
import {addItemToCart} from '../../actions'
import toJson from 'enzyme-to-json'

describe('Cart', () => {
  it('renders', () => {
    const wrapper = shallow(<Cart cart={{items:[]}} fullPrice={10}/>)
    expect(
      console.error.called
    ).toEqual(false)
  })

  it('renders CartEmpty when items are null', () => {
    const wrapper = shallow(<Cart cart={{items:[]}} fullPrice={10}/>)
    expect(wrapper.find(CartEmpty).length).toEqual(1)
  })

  it('renders items when it has items', () => {
    const items = [
      {id: 'one'},
      {id: 'two'},
    ]
    const wrapper = shallow(<Cart cart={{items}} fullPrice={10}/>)
    expect(wrapper.find(CartTable).first().props().items).toEqual(items)
  })

})
