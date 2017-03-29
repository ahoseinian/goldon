import React from 'react'
import {shallow} from 'enzyme'
import CardSm from './CardSm'
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
})
