import React from 'react'
import {Link} from 'react-router'
import {PrimaryButton} from '../common/Button'
import Icon from '../common/Icon'

export default() => (
  <Link to="/search">
    <PrimaryButton><Icon name="filter"/> <small>جستجو</small> </PrimaryButton>
  </Link>
)
