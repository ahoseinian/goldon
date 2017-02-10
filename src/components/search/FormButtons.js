import React from 'react'
import {PrimaryButton, Button} from '../common/Button'
import {Link} from 'react-router'

export default({handleReset}) => (
  <div className="row">
    <div className="col-6">
      <Button className="btn-block" onClick={handleReset}>
        ریست</Button>
    </div>
    <div className="col-6">
      <Link to="/">
        <PrimaryButton className="btn-block" type="submit">اعمال فیلتر</PrimaryButton>
      </Link>
    </div>
  </div>

)
