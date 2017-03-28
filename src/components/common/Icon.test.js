import React from 'react'
import {shallow} from 'enzyme'
import Icon from './Icon'

describe('Icon', () => {
  it('renders span with className', () => {
    const wrapper = shallow(<Icon name="test" />)
    expect(wrapper.props().className).toContain('fa-test')
  })
})
