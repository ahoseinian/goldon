import React from 'react'
import Icon from './common/Icon'
import {Button} from './common/Button'
import {Ltr} from './common/Ltr'

const list = [
  {
    label: 'telegram'
  }, {
    label: 'instagram'
  }
]

const Social = () => {
  return (
    <Ltr>{list.map((x, k) => <SocialSingle key={k} item={x}/>)}</Ltr>
  )
}

const SocialSingle = ({item}) => (
  <Button>
    <Icon name={item.label}/>
  </Button>
)

export default Social
