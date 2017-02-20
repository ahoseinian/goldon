import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {PrimaryButton} from '../common/Button'
import Icon from '../common/Icon'
import isEmpty from 'lodash.isempty'
import styled, {keyframes} from 'styled-components'

const rotate360 = keyframes `
  0%, 100% {
    transform: rotateY(0deg);
  }

  25%,75% {
    transform: rotateY(360deg);
  }
`

const Flipper = styled.div `
  display: inline-block;
  animation: ${rotate360} 3s infinite;
`

const SearchBtn = ({hasFilter}) => (
  <Link to="/search">
    <PrimaryButton>
      {hasFilter
        ? <div>
            <Flipper>
              <Icon name="filter"/>
            </Flipper>
            <span>تغییر فیلتر</span>
          </div>
        : <div>
          <Icon name="filter"/>
          <span>جستجو</span>
        </div>}
    </PrimaryButton>
  </Link>
)

const mapStateToProps = ({search}) => ({
  hasFilter: !isEmpty(search)
})

export default connect(mapStateToProps)(SearchBtn)
