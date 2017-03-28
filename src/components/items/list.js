import React, {PropTypes} from 'react'
import Card from './card/CardSm'

const List = ({items}) => {
  const itemList = items.map(x => <div className="col-12 col-sm-6 col-md-4 my-2" key={x.id}><Card  item={x} /></div>)
  return <div className="row">{itemList}</div>
}
List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default List
