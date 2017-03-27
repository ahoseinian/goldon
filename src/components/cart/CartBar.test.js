import React from 'react'
import {shallow} from 'enzyme'
import CartBar from './CartBar'
import toJson from 'enzyme-to-json'

describe('CartBar', () => {
  it('renders', () => {
    const wrapper = shallow(<CartBar pathname="/"/>)
    expect(
      console.error.called
    ).toEqual(false)
  })

  it('does not render HomeLink on home', () => {
    const wrapper = shallow(<CartBar pathname="/" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('does renders HomeLink on othe pathes', () => {
    const wrapper = shallow(<CartBar pathname="/gg" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
