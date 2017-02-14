import React from 'react'
import {Small} from '../../common/typography/Small'

const Disc = ({name, value, measure}) => (
  <div className="d-flex justify-content-between">
    <div>
      {name}:
    </div>
    <div>
      {value}
      <Small>{measure}</Small>
    </div>
  </div>
)

export default Disc
