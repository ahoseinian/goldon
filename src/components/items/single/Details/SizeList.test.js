import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import SizeList from './SizeList'

const sizes = {
  tool: 1,
  arz: 2,
  ertefa: 3,
  ghotr: 4
}

describe('SizeList', () => {
  it('renders', () => {
    const wrapper = shallow(<SizeList {...sizes}/>)
    expect(toJson(
      wrapper
    )).toMatchSnapshot()
  })
})
