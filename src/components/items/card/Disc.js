import React from 'react'
import {Small} from '../../common/typography/Small'

const Disc = ({name, value, measure}) => (
  <div className="text-center">
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
