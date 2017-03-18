import React, {PropTypes} from 'react';
import styled from 'styled-components'

const TextParagraph = styled.div `
  white-space: pre-line;
`

const SimpleCard = ({title, children}) => children
  ? (
    <div className="card my-3">
      <div className="card-header text-center">
        <h5 className="m-2">{title}</h5>
      </div>
      <div className="card-block">
        <TextParagraph>{children}</TextParagraph>
      </div>
    </div>
  )
  : null

SimpleCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default SimpleCard;
