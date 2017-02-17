import styled from 'styled-components'
import {color} from '../theme'

export const Button = styled.button `
  cursor: pointer;
  color: ${color.dark};
  background: ${color.white};
  border: 1px solid ${color.normal};
  padding: .1rem .5rem;
  border-radius: .2rem;
`

export const PrimaryButton = styled(Button)`
  background: ${color.dark}
  color: ${color.white};
  padding: .6rem 1.2rem;
`
