import React, {PropTypes} from 'react'
import CardSm from './card/CardSm'

const List = ({items}) => {
  const itemList = items.map(item => <div className="col-12 col-sm-6 col-md-4 my-2" key={item.id}><CardSm  {...item} /></div>)
  return <div className="row">{itemList}</div>
}
List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default List
