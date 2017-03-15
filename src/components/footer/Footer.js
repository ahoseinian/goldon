import React from 'react'
import styled from 'styled-components'
import {color} from '../theme'
import Social from '../Contact/Social'

const Wrapper = styled.div `
  margin-top: 2rem;
`
const CopyRight = styled.div `
  color: ${color.black};
  margin-left: 1rem;
  font-size: 1.5rem;
`
const Footer = () => (
  <Wrapper className="container">
    <div className="row">
      <div className="col-12 d-flex justify-content-between mb-3">
        <Social/>
        <CopyRight> © میاریم</CopyRight>
      </div>
    </div>
  </Wrapper>
)

export default Footer;
