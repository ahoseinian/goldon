import React from 'react'
import Row from './Row'
import Icon from '../common/Icon'

const TableList = ({items}) => {

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th><Icon name="camera"/></th>
            <th>نام</th>
            <th>تعداد و قیمت</th>
            <th><Icon name="edit"/></th>
          </tr>
        </thead>
        <tbody>
          {items.map(x => <Row item={x} key={x.id}/>)}
        </tbody>
      </table>
    </div>
  )

}
export default TableList
