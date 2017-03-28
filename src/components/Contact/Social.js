import React from 'react'
import SocialLink from './SocialLink'

const list = [
  {
    url: 'https://t.me/cactusang',
    label: 'telegram'
  }, {
    url: 'https://www.instagram.com/cactusang',
    label: 'instagram'
  }
]

const Social = () => (
  <div className="h2 m-0">
    {list.map((x, k) => <SocialLink key={k} item={x}/>)}
  </div>
)

export default Social
