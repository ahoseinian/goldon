import React from 'react'
import Icon from '../common/Icon'
import Card from '../common/card/Card'
import DeliverySection from './DeliverySection'

const Delivery = () => (
  <Card className="card-block mb-3 text-muted">
    <div className=" d-flex flex-wrap justify-content-between">
      <DeliverySection iconName="truck">تحویل اکسپرس</DeliverySection>
      <DeliverySection iconName="credit-card">پرداخت در محل</DeliverySection>
      <DeliverySection iconName="dollar">تضمین بهترین قیمت</DeliverySection>
    </div>
  </Card>
)


export default Delivery
