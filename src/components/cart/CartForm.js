import React from 'react';
import {Button} from '../common/Button'

const CartForm = ({submit}) => (
  <form onSubmit={submit}>
    <div className="form-group">
      <label htmlFor="fullname">نام کامل:</label>
      <input id="fullname" type="text" className="form-control" name="fullname" required/>
    </div>
    <div className="form-group">
      <label htmlFor="tel">شماره تلفن:</label>
      <input id="tel" type="number" className="form-control" name="tel" required/>
    </div>
    <div className="form-group">
      <label htmlFor="address">آدرس:</label>
      <textarea name="address" id="address" rows="3" className="form-control" required></textarea>
    </div>
    <div className="text-left">
      <Button>ثبت سفارش</Button>
    </div>
  </form>
);

CartForm.propTypes = {
  submit: React.PropTypes.func.isRequired
};

export default CartForm;
