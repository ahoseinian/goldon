import React from 'react';
import Icon from '../Icon'

const SingleLink = ({name, url}) => name
  ? (
    <a href={url} target="_blank">
      <span>
        {name}
      </span>
      <Icon name="external-link"/>
    </a>
  )
  : null;

SingleLink.propTypes = {
  name: React.PropTypes.string,
  url: React.PropTypes.string
};

export default SingleLink;
