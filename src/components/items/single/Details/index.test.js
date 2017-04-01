import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Details from './index'

const item = {
  size: {},
  modelsNames: [],
  colors: [],
  names: [],
}

describe('item > single> Details > index', () => {
  it('renders', () => {
    const wrapper = shallow(<Details item={item}/>)
    expect(toJson(
      wrapper
    )).toMatchSnapshot()
  })
})
