import React from 'react'
import {shallow} from 'enzyme'
import CardSm from './CardSm'
import ItemImage from '../image/Image'
import toJson from 'enzyme-to-json'

const item = {
  id: '#number1',
  name: 'first item',
  images: ['one'],
  price: 22,
}

describe('CardSm', () => {
  it('renders', () => {
    const wrapper = shallow(<CardSm {...item} />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('does not renders empty image', () => {
    const item = {
      id: '1',
      name: '2',
      images: [],
      price: 22
    }
    const wrapper = shallow(<CardSm {...item} />)
    expect(wrapper.find(ItemImage).length).toEqual(0)
  })
})
