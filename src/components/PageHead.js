import React from 'react'
import styled from 'styled-components'
import headerBg from '../static/images/header-bg.jpg'
import {color} from './theme'

const BackDrop = styled.div `
  background: url(${headerBg});
  background-size: cover;
  height: 300px;
  margin-bottom: 1rem;
`
const Title = styled.h1 `
  font-size: 2rem;
  padding: 1rem 2rem;
  text-align: center;
  color: ${color.white};
  background: rgba(0, 0, 0, 0.3);
`

const PageHead = () => (
  <BackDrop className="d-flex justify-content-center align-items-center hidden-xs-down">
    <Title> میاریم اجتماع آنلاین دوست داران طبیعت </Title>
  </BackDrop>
)

export default PageHead
