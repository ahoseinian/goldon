import styled from 'styled-components'
import {color} from '../theme'

const Card = styled.div `
  box-shadow: -3px 3px 5px -3px ${color.dark};
  transition: box-shadow .2s;
  &:hover{
    box-shadow: none;
  }
`
export default Card
