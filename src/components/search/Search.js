import React, {Component} from 'react'
import models from '../../../api/models/models'
import Select from 'react-select';
import {connect} from 'react-redux'
import {setSearchValue, resetSearch} from '../../actions'
import Card from '../common/Card'
import FormButtons from './FormButtons'

class Search extends Component {
  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    const {search, setSearchValue, resetSearch} = this.props
    return (
      <div className="container">
        <Card className="card card-block">
          <form onSubmit={this
            .handleSubmit
            .bind(this)}>
            <div className="form-group">
              <Checkboxes items={models} />
            </div>
            <FormButtons handleReset={resetSearch}/>
          </form>
        </Card>
      </div>
    )
  }
}

const Checkboxes = ({items}) => (
  <div>
    {items.map( item => (
      <label className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" />
        <span className="custom-control-indicator"></span>
        <span className="custom-control-description">{item.label}</span>
      </label>
    ))}
  </div>
)

export default connect((state) => ({search: state.search}), ({setSearchValue, resetSearch}))(Search)
