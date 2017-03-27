import React from 'react'
import CartIcon from './CartIcon'
// import SearchButton from '../search/SearchButton'
import HomeLink from '../common/Links/HomeLink'

const CartBar = ({pathname}) => {
  const TopLink = pathname === '/'
    ? null
    : <HomeLink/>

  return (
    <div className="d-flex justify-content-between">
      {TopLink}
      <CartIcon/>
    </div>
  )
}

CartBar.propTypes = {
  pathname: React.PropTypes.string.isRequired
}

export default CartBar
