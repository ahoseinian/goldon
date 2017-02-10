import React from 'react'
import {Link} from 'react-router'
import {Button} from '../Button'
import Icon from '../Icon'

export default() => (
  <Link to="/">
    <Button><Icon name="home"/></Button>
  </Link>
)
