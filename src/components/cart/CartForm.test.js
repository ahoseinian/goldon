import React from 'react'
import {shallow} from 'enzyme'
import CartForm from './CartForm'
import toJson from 'enzyme-to-json'

describe('CartForm', () => {
  it('renders', () => {
    const wrapper = shallow(<CartForm submit={jest.fn()}/>)
  })

  it('is disabled when props disabled is true', () => {
    const wrapper = shallow(<CartForm submit={jest.fn()} disabled={true}/>)
    expect(
       wrapper.find('.cart-form-button').first().props().disabled
    ).toEqual(true)
  })

  it('is not disabled when props disabled is false', () => {
    const wrapper = shallow(<CartForm submit={jest.fn()} disabled={false}/>)
    expect(
       wrapper.find('.cart-form-button').first().props().disabled
    ).toEqual(false)
  })

  it('has submit func in onSubmit', () => {
    const submitFn = jest.fn()
    const wrapper = shallow(<CartForm submit={submitFn} disabled={false}/>)
    expect(wrapper.find('form').props().onSubmit).toEqual(submitFn)
  })
})
