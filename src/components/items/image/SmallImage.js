import React from 'react'
const SmallImage = ({id}) => <img className="img-thumbnail" src={'/images/50/' + id + '.jpg'} width="60" alt={id}/>
export default SmallImage
