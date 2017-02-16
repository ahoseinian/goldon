import React from 'react'
import styled from 'styled-components'
import {color} from '../theme'

const Wrapper = styled.div`
  margin-top: 2rem;
`
const CopyRight = styled.div`
  text-align: center;
  color: ${color.black};
  padding: 1rem;
`
const Footer = () => (
  <Wrapper className="container">
    <div className="row">
      <div className="col-12">
        <CopyRight> © میاریم</CopyRight>
      </div>
    </div>

  </Wrapper>
)

export default Footer;
