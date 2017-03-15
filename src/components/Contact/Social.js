import React from 'react'
import Icon from '../common/Icon'
import styled from 'styled-components'
import {color} from '../theme'

const LinkButton = styled.a`
  color:${color.dark}
`

const list = [
  {
    url: 'http://t.me/man_O_she',
    label: 'telegram'
  }, {
    url: 'https://www.instagram.com/man_O_she/',
    label: 'instagram'
  }
]

const Social = () => (
  <div className="h2 m-0">
    {list.map((x, k) => <SocialSingle key={k} item={x}/>)}
  </div>
)

const SocialSingle = ({item}) => (
  <LinkButton href={item.url} target="blank" className="mx-2">
    <Icon name={item.label}/>
  </LinkButton>
)

export default Social
