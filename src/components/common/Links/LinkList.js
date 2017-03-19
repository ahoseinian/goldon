import React from 'react';
import SingleLink from './SingleLink'

const LinkList = ({links}) => (
  <div>
    {links.map(x => <SingleLink {...x} key={x._id}/>)}
  </div>
)

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default LinkList;
