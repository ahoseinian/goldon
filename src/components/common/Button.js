import styled from 'styled-components'
import {color} from '../theme'

export const Button = styled.button `
  cursor: pointer;
  color: ${color.dark};
  background: ${color.white};
  box-shadow:0 4px 12px -4px  ${color.grey};
  border: none;
  padding: .6rem 1.2rem;
  border-radius: 0;
`

export const PrimaryButton = styled(Button)`
  /*background: ${color.light}*/
  color: ${color.dark};
  box-shadow:0 4px 12px -4px  ${color.dark};
`
