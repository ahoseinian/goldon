import React from 'react'
import styled from 'styled-components'
import headerBg from '../static/images/header-bg.jpg'
import {color} from './theme'
import {Link} from 'react-scroll'
import Icon from './common/Icon'

const BackDrop = styled.div `
  background: url(${headerBg});
  background-size: cover;
  height: 100vh;
  margin-bottom: 1rem;
`
const Title = styled.h1 `
  font-size: 3rem;
  padding: 1rem 2rem;
  text-align: center;
  color: ${color.white};
  background: rgba(0, 0, 0, 0.3);
`
const ButtomLink = styled.span `
  font-size: 3rem;
  color: ${color.white};
  background: rgba(0, 0, 0, 0.3);
  position:relative;
  top: 10rem;
  border-radius: 10rem;
  padding:2rem 1rem 1rem;
`

const PageHead = () => (
  <BackDrop className="d-flex justify-content-center align-items-center ">
    <div className="text-center">
      <Title>
        میاریم اجتماع آنلاین دوست داران طبیعت
      </Title>

      <ButtomLink>

        <Link to="firstInsideContainer" smooth={true}>
          <Icon name="chevron-down"/>
        </Link>
      </ButtomLink>
    </div>
  </BackDrop>
)

export default PageHead
