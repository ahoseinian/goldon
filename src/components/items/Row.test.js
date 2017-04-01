import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Row from './Row'
import SmallImage from './image/SmallImage'

const item = {
  price: 235,
  quantity: 2
}

describe('Row', () => {
  it('renders', () => {
    const wrapper = shallow(<Row {...item}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('does not render SmallImage when there is no image', () => {
    const wrapper = shallow(<Row {...item}/>)
    expect(wrapper.find(SmallImage).length).toEqual(0)
  })

  it('renders SmallImage when there is image', () => {
    const itemWithImages = {...item, images: ['afts']}
    const wrapper = shallow(<Row {...itemWithImages}/>)
    expect(wrapper.find(SmallImage).length).toEqual(1)
  })

  it('calls removeFromCart() on remove-from-cart click', () => {
    const removeFn = jest.fn()
    const itemWithRemoveFromCartProp = {...item, removeFromCart: removeFn}
    const wrapper = shallow(<Row {...itemWithRemoveFromCartProp}/>)
    const removeButton = wrapper.find('.remove-from-cart')
    removeButton.simulate('click')
    expect(removeFn.mock.calls.length).toEqual(1)

  })
})
