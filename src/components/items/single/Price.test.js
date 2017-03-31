import React from 'react'
import {shallow} from 'enzyme'
import Price from './Price'
import toJson from 'enzyme-to-json'

describe('Price', () => {
  it('renders ', () => {
    const wrapper = shallow(<Price amount={2000}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
