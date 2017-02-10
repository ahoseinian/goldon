import React from 'react'
import Row from './Row'

const TableList = ({items}) => {

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <tbody>
          {items.map(x => <Row item={x} key={x.id}/>)}
        </tbody>
      </table>
    </div>
  )

}
export default TableList
