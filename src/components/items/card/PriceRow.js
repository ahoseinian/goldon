import React from 'react'
import {Button} from '../../common/Button'
import Disc from './Disc'

export default({price, handleClick}) => (
  <div className="d-flex justify-content-between p-3">
    <Disc name="قیمت" value={price.toLocaleString()} measure="تومان"/>
    <Button onClick={handleClick}>خرید</Button>
  </div>
)
