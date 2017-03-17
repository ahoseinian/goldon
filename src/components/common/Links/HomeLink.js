import React from 'react'
import {Link} from 'react-router'
import {PrimaryButton} from '../Button'
import Icon from '../Icon'

export default() => (
  <Link to="/" className="my-2">
    <PrimaryButton>
      <Icon name="home"/>
      <span>خانه</span>
    </PrimaryButton>
  </Link>
)
