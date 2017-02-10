import React from 'react'
import Price from '../items/Price'
import {PrimaryButton} from '../common/Button'

const CheckOutBar = ({price}) => (
  <div className="d-flex pb-3 pull-left">
    <Price value={price} />
    <PrimaryButton>مرحله بعد</PrimaryButton>
  </div>
)

export default CheckOutBar
