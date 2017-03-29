import React from 'react'
const SmallImage = ({id}) => <img className="img-thumbnail" src={'/images/50/' + id + '.jpg'} width="60" alt={id}/>

SmallImage.propTypes = {
  id: React.PropTypes.string.isRequired
}

export default SmallImage
