import React, {PropTypes} from 'react';
import styled from 'styled-components'
import Card from './Card'

const TextParagraph = styled.div `
  white-space: pre-line;
`

const SimpleCard = ({title, children}) => children
  ? (
    <Card className="my-3">
      <div className="card-header text-center">
        <h5 className="m-2">{title}</h5>
      </div>
      <div className="card-block">
        <TextParagraph>{children}</TextParagraph>
      </div>
    </Card>
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
