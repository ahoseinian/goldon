import React from 'react'
import {Link} from 'react-router'
import {Button} from '../common/Button'
import Icon from '../common/Icon'

export default() => (
  <Link to="/search">
    <Button><Icon name="filter"/></Button>
  </Link>
)
