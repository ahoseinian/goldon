import React from 'react'
import {shallow} from 'enzyme'
import {Card} from './Card'
import toJson from 'enzyme-to-json'

const item = {
  name: '',
  images: ['one'],
  price: 22,
  size: {},
}

describe('Card', () => {
  it('renders', () => {
    const wrapper = shallow(<Card item={item} addItemToCart={jest.fn()}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
