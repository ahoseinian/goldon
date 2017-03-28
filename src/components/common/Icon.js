import React from 'react'

const Icon = ({name}) => <span className={`fa fa-fw fa-${name}`}></span>

Icon.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default Icon
