import React from 'react';
import {Link} from 'react-router'

const CartEmpty = () => (
  <div className="container text-muted text-center p-3">
    <div>محصولی در سبد موجود نمیباشد.</div>
    <Link to="/">بازگشت</Link>
  </div>
);


export default CartEmpty;
