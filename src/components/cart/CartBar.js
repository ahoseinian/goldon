import React from 'react'
import CartIcon from './CartIcon'
// import SearchButton from '../search/SearchButton'
import HomeLink from '../common/Links/HomeLink'

const CartBar = ({pathname}) => (
    <div className="d-flex justify-content-between">
      {pathname !== '/' && <HomeLink/>}
      <CartIcon/>
    </div>
)


CartBar.propTypes = {
  pathname: React.PropTypes.string.isRequired
}

export default CartBar
