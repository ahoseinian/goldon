import styled from 'styled-components'
import {color} from '../theme'

export const Button = styled.button `
  cursor: pointer;
  color: ${color.dark};
  background: ${color.white};
  border: none; 
  padding: .6rem 1.2rem;
  border-radius: 0;
`

export const PrimaryButton = styled(Button)`
  background: ${color.light}
  color: ${color.white};
`
