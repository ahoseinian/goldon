import styled from 'styled-components'
import {color} from '../theme'
import Icon from '../common/Icon'

const LinkButton = styled.a`
  color:${color.dark}
`

const SocialLink = ({item}) => (
  <LinkButton href={item.url} target="blank" className="mx-2">
    <Icon name={item.label}/>
  </LinkButton>
)

export default SocialLink
