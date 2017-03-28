import React from 'react'
import SocialLink from './SocialLink'

const defaultList = [
  {
    url: 'https://t.me/cactusang',
    label: 'telegram'
  }, {
    url: 'https://www.instagram.com/cactusang',
    label: 'instagram'
  }
]

const Social = ({
  list = defaultList
}) => (
  <div className="h2 m-0">
    {list.map((item) => <SocialLink key={item.label} {...item}/>)}
  </div>
)

export default Social
