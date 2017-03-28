import React from 'react'
import {shallow} from 'enzyme'
import SingleRowTable from './SingleRowTable'

describe('SingleRowTable', () => {
  it('is null without children ', () => {
    const wrapper = shallow(<SingleRowTable name="test"/>)
    expect(wrapper.html()).toEqual(null)
  })

  it('renders children correctly', () => {
    const wrapper = shallow(
      <SingleRowTable name="test">
          Amir
      </SingleRowTable>
    )
    expect(wrapper.html()).not.toEqual(null)
    expect(wrapper.html()).toContain('Amir')
    expect(wrapper.html()).toContain('test')
  })
})
