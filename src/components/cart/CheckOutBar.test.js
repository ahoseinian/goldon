import React from 'react'
import {shallow} from 'enzyme'
import CheckOutBar from './CheckOutBar'
import Price from '../items/Price'

describe('CheckOutBar', () => {
  it('renders', () => {
    const wrapper = shallow(<CheckOutBar price={2} />)
  })

  it('renders price', () => {
    const wrapper = shallow(<CheckOutBar price={2} />)
    expect(
      wrapper.contains(<Price value={2}/>)
    ).toEqual(true)
  })
})
