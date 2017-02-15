import React from 'react'
import {Link} from 'react-router'
import {PrimaryButton} from '../Button'
import Icon from '../Icon'

export default() => (
  <Link to="/">
    <PrimaryButton><Icon name="home"/> <small>خانه</small></PrimaryButton>
  </Link>
)
