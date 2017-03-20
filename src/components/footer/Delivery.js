import React, {PropTypes} from 'react'
import Icon from '../common/Icon'
import Card from '../common/card/Card'

const Delivery = () => (
  <Card className="card-block mb-3 text-muted">
    <div className=" d-flex flex-wrap justify-content-between">
      <Section iconName="truck">تحویل اکسپرس</Section>
      <Section iconName="credit-card">پرداخت در محل</Section>
      <Section iconName="dollar">تضمین بهترین قیمت</Section>
    </div>
  </Card>
)

const Section = ({iconName, children}) => (
  <div className="text-center">
    <div className="h2">
      <Icon name={iconName}/>
    </div>
    <div>{children}</div>
  </div>
)
Section.propTypes = {
  iconName: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default Delivery
