import React from 'react'
import models from '../../../api/models/models'
import Select from 'react-select';
import {connect} from 'react-redux'
import {setSearchValue} from '../../actions'
import Card from '../common/Card'

const Search = ({setSearchValue, search}) => {
  return (
    <Card className="card card-block">
      <form className="row">
        <div className="col-12 col-sm-3">
          <Select
            name="form-field-name"
            placeholder="مدل محصول"
            value={search.model}
            options={models}
            onChange={setSearchValue.bind(null, 'model')}/>
        </div>
      </form>
    </Card>
  )
}

export default connect((state) => ({search: state.search}), ({setSearchValue}))(Search)
