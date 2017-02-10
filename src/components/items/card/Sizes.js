import React from 'react'
import Disc from './Disc'

const Sizes = ({size}) => (
  <div className="d-flex justify-content-between p-3">
    <Disc name="طول" value={size.tool} measure="سانتی متر"/>
    <Disc name="عرض" value={size.arz} measure="سانتی متر"/>
    <Disc name="ارتفاع" value={size.ertefa} measure="سانتی متر"/>
  </div>
)

export default Sizes
