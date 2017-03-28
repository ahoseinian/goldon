import React from 'react'
import {Ltr} from '../common/Ltr'
import Icon from '../common/Icon'

export default function Tel({number = "0936 3827948"}) {
  return (
    <div>
      <Icon name="phone"/>
      <Ltr>{number}</Ltr>
    </div>
  )
}

Tel.propTypes = {
  number: React.PropTypes.string
}
