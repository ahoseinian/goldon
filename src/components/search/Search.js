import React, {Component} from 'react'
import models from '../../../api/models/models'
import Select from 'react-select';
import {connect} from 'react-redux'
import {setSearchValue} from '../../actions'
import Card from '../common/Card'
import FormButtons from './FormButtons'

class Search extends Component {
  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    const {search, setSearchValue} = this.props
    return (
      <div className="container">
        <Card className="card card-block">
          <form onSubmit={this
            .handleSubmit
            .bind(this)}>
            <Select
              className="form-group"
              name="form-field-name"
              placeholder="مدل محصول"
              value={search.model}
              options={models}
              onChange={setSearchValue.bind(null, 'model')}/>
            <FormButtons/>
          </form>
        </Card>
      </div>
    )
  }
}

export default connect((state) => ({search: state.search}), ({setSearchValue}))(Search)
