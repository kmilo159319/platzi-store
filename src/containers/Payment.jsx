import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/components/Payment.css';
import {AppContext} from '../context/AppContext';
import { handleSumTotal } from '../utils/handleSumTotal';

export const Payment = () => {
  const {state: { cart, buyer }, addNewOrder} = useContext(AppContext);
  const history = useHistory();

  const paypalOptions = {
    clientId:'AZAIszzevj17Kh3ij6SthUysKemVSoiOOohkUwkgzgidYDR_hnNSIPaLKo93tDqhlKrs7QpAGAQgGDE4',
    intent:'capture',
    currency:'USD'
  }

  const buttonStyles = {
    Layout: 'vertical',
    shape: 'rect'
  }

  const handlePymentSucess = (data) => {
    if(data.status === 'COMPLETED'){
       const newOrder = {
          buyer,
          products: cart,
          Payment: data
       }
       addNewOrder(newOrder);
       history.push('/checkout/success');
    }
  }


  return (
    <div className="Payment">
      <div className="Payment-content">
        <h5>Resumen del pedido</h5>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
             <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
             </div>
          </div>
        ))}
        <h4>Total: $ {handleSumTotal(cart)}</h4>
        <div className="Payment-button">

          </div>
      </div>
      <div />
    </div>
  );
};
