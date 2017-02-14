import React from 'react'
import Disc from './Disc'

export default({price}) => (
  <div className="px-1 pt-2">
    <Disc name="قیمت" value={price.toLocaleString()} measure="تومان"/>
  </div>
)
