import React from 'react'
import Disc from './Disc'

export default({price}) => price ? (
  <div className="pt-2 pl-3">
    <Disc name="قیمت" value={price.toLocaleString()} measure="تومان"/>
  </div>
): null
