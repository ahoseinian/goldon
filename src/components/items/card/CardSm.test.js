import React from 'react'
import {shallow} from 'enzyme'
import CardSm from './CardSm'

const item = {
  id: '#id',
  name: '',
  images: ['one'],
  price: 22,
}

describe('CardSm', () => {
  it('renders', () => {
    const wrapper = shallow(<CardSm {...item} />)
  })
})
