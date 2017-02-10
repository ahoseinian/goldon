import React from 'react'
import CartIcon from './CartIcon'
import SearchButton from '../search/SearchButton'

const ContactBar = () => (
  <div className="d-flex justify-content-between py-2">
    <SearchButton />
    <CartIcon/>
  </div>
)

export default ContactBar
