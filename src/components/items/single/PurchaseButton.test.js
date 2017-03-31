import React from 'react'
import {shallow} from 'enzyme'
import {PurchaseButton} from './PurchaseButton'
import toJson from 'enzyme-to-json'

describe('PurchaseButton', () => {
  it('shows buy button when item does not exist in cart', () => {
    const wrapper = shallow(<PurchaseButton
      item={{id:'23df'}}
      addItemToCart={jest.fn()}
      cartItems={[]}
    />)

    expect(
      wrapper.find('.buy-text')
    ).toHaveLength(1)

    expect(toJson(
      wrapper
    )).toMatchSnapshot()
  })


  describe('item exists in cart', () => {
    const item = { id: 'test' }
    const cartItems = [{id: 'test', quantity: 3}, {id: 'a3f32', quantity: 2}]
    const wrapper = shallow(<PurchaseButton
      item={item}
      addItemToCart={jest.fn()}
      cartItems={cartItems}
    />)

    it('has quantity of item in cart +1', () => {
      expect(
        wrapper.find('.item-quanity-plus').first().text()
      ).toEqual('4')
    })

    it('does not render plus button when item exists in cart', () => {
      expect(
        wrapper.find('.buy-text')
      ).toHaveLength(0);
    })

  })


})
