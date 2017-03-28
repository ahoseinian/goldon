import React from 'react'
import {shallow} from 'enzyme'
import DeliverySection from './DeliverySection'

describe('DeliverySection', () => {
  it('renders correct props', () => {
    const wrapper = shallow(<DeliverySection  iconName="t">a</DeliverySection>)
  })
})
