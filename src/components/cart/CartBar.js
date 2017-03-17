import React from 'react'
import CartIcon from './CartIcon'
// import SearchButton from '../search/SearchButton'
import HomeLink from '../common/Links/HomeLink'

const CartBar = ({location}) => {
  const TopLink = location.pathname === '/'
    ? null
    : <HomeLink/>

  return (
    <div className="d-flex justify-content-between">
      {TopLink}
      <CartIcon/>
    </div>
  )
}

export default CartBar
