import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import TableList from './TableList'

describe('TableList', () => {
  it('renders', () => {
    const wrapper = shallow(<TableList items={[]}/>)
    expect(toJson(
      wrapper
    )).toMatchSnapshot()
  })
})
