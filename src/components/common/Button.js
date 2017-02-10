import styled from 'styled-components'
import {color} from '../theme'

export const Button = styled.button `
  cursor: pointer;
  color: ${color.white};
  background: ${color.dark};
  border: none;
  padding: .1rem .5rem;
  border-radius: .2rem;
`

export const PrimaryButton = styled(Button)`
  background: ${color.dark}
`
