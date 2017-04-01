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

  describe('handleSubmit()', () => {
    it('calls completeCartOrder with right arguments', () => {
      const thenMock = jest.fn()
      const completeCartOrder = jest.fn().mockImplementation(() => ({then: thenMock}));

      const wrapper = shallow(<Cart
        cart={{items:[]}}
        fullPrice={10}
        completeCartOrder={completeCartOrder}/>)

      const event = {
        preventDefault: jest.fn(),
        target:{
          elements:{
            tel: {value: 'tel'},
            address: {value: 'add'},
            fullname: {value: 'name'},
          }
        }
      }

      wrapper.instance().handleSubmit(event)
      expect(completeCartOrder.mock.calls.length).toEqual(1)
      expect(thenMock.mock.calls.length).toEqual(1)
      expect(completeCartOrder.mock.calls[0][0]).toEqual({
        tel: 'tel',
        address: 'add',
        fullname: 'name',
        items: []
      })

    })
  })
})
