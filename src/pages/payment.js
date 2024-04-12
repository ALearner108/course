import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Cancel } from '../actions';

import { Link } from "react-router-dom";

import './Paymentform.css'; // Import the CSS file for styles

const PaymentForm = () => {
  const [selectedPayment, setSelectedPayment] = useState('');

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.id);
  };
  const isNextButtonDisabled = !selectedPayment;

  const handleNextButtonClick = () => {
    // Add logic for what happens when the Next button is clicked
    // For now, you can log a message
    console.log('Next button clicked with payment:', selectedPayment);
  };
 


  return (
    <div className="payment-container">
      <div className="payment-header">
        <h4>
          Select a <span className="payment-highlight">Payment</span> method
        </h4>
      </div>

      <form action="#">
        <div className="payment-options">
          <label htmlFor="visa" className="payment-label" onClick={handlePaymentChange}>
            <input type="radio" name="payment" id="visa" />
            <div className="payment-info">
              <img src="https://i.ibb.co/vjQCN4y/Visa-Card.png" alt="Visa Logo" />
              <span>VISA</span>
            </div>
          </label>

          <label htmlFor="mastercard" className="payment-label" onClick={handlePaymentChange}>
            <input type="radio" name="payment" id="mastercard" />
            <div className="payment-info">
              <img src="https://i.ibb.co/vdbBkgT/mastercard.jpg" alt="Mastercard Logo" />
              <span>Mastercard</span>
            </div>
          </label>

          <label htmlFor="esewa" className="payment-label" onClick={handlePaymentChange}>
            <input type="radio" name="payment" id="esewa" />
            <div className="payment-info">
              <img src="https://p7.hiclipart.com/preview/261/608/1001/esewa-zone-office-bayalbas-google-play-iphone-iphone-thumbnail.jpg" alt="Esewa Logo" />
              <span>Esewa</span>
            </div>
          </label>

          <label htmlFor="AMEX" className="payment-label" onClick={handlePaymentChange}>
            <input type="radio" name="payment" id="AMEX" />
            <div className="payment-info">
              <img src="https://i.ibb.co/wQnrX86/American-Express.jpg" alt="AMEX Logo" />
              <span>AMEX</span>
            </div>
          </label>
        </div>
        <button
          type="button"
          className="next-button"
          onClick={handleNextButtonClick}
          disabled={isNextButtonDisabled}
        >
          Next
        </button>
        
         <div className='cancel'>
            <Link to={"/"}
            onClick={Cancel}
            type='button'
            >
           Cancel
            </Link>
            </div>
           
          
     </form>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PaymentForm;
