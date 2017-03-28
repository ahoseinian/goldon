import React from 'react'
import {shallow} from 'enzyme'
import DeliverySection from './DeliverySection'
import Icon from '../common/Icon'

describe('DeliverySection', () => {

  it('renders correct props', () => {
    const children = 'test'
    const wrapper = shallow(<DeliverySection iconName="t">{children}</DeliverySection>)
    expect(wrapper.contains(children)).toEqual(true)
    expect(wrapper.contains(<Icon name="t"/>)).toEqual(true)
  })
  
})
