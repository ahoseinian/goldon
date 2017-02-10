import React from 'react'
import Card from './card/CardSm'

const List = ({items}) => {
  const itemList = items.map(x => <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2" key={x.id}><Card  item={x} /></div>)
  return <div className="row">{itemList}</div>
}

export default List
