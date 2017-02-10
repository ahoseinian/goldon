import React from 'react'
import {Button} from '../common/Button'
import Icon from '../common/Icon'


export default() => (
  <div className="row">
    <div className="col-6">
      <Button className="btn-block" type="reset">
        <Icon name="refresh"/>
        ریست</Button>
    </div>
    <div className="col-6">
      <Button className="btn-block" type="submit">اعمال فیلتر</Button>
    </div>
  </div>

)
