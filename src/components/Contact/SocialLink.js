import React from 'react'
import styled from 'styled-components'
import {color} from '../theme'
import Icon from '../common/Icon'

const LinkButton = styled.a`
  color:${color.dark}
`

const SocialLink = ({url, label}) => (
  <LinkButton href={url} target="blank" className="mx-2">
    <Icon name={label}/>
  </LinkButton>
)

SocialLink.propTypes = {
  url: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
}

export default SocialLink
