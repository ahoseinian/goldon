import React from 'react'
import CartIcon from './CartIcon'
import Tel from '../Contact/Tel'

const ContactBar = () => (
  <div className="d-flex justify-content-between py-2">
    <Tel/>
    <CartIcon/>
  </div>
)

export default ContactBar
