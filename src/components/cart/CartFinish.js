import React from 'react';
import {Ltr} from '../common/Ltr'
import SingleRowTable from '../common/SingleRowTable'

const CartFinish = () => (
  <div className="container">
    <p className="p-3">زمن تشکر از اعتماد شما همکاران ما در ساعات آینده با شماره شما جهت تکمیل سفارش
      تماس خواهند گرفت.</p>

    <SingleRowTable name="شماره پشتیبانی">
      <Ltr>
        <tel>+98 936 3827 948</tel>
      </Ltr>
    </SingleRowTable>
  </div>
);

export default CartFinish;
