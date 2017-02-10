import styled from 'styled-components'
import {color} from '../theme'

export const Button = styled.button`
  cursor: pointer;
  color: ${color.white};
  background: ${color.dark};
  border: none;
  padding: .2rem .7rem;
  border-radius: .2rem;
  margin-right: .3rem;
`

export const PrimaryButton = styled(Button)`
  background: ${color.dark}
`
