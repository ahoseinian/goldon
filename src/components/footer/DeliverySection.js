import React from 'react'

const DeliverySection = ({iconName, children}) => (
  <div className="text-center">
    <div className="h2">
      <Icon name={iconName}/>
    </div>
    <div>{children}</div>
  </div>
)

DeliverySection.propTypes = {
  iconName: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired
}

export default DeliverySection
