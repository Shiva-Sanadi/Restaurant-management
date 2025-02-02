import React, { useState } from 'react';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'cardNumber':
        setCardNumber(value);
        break;
      case 'expiryDate':
        setExpiryDate(value);
        break;
      case 'cvv':
        setCvv(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    
    // Card number validation
    if (!cardNumber) {
      validationErrors.cardNumber = 'Card number is required';
    } else if (!/^\d{16}$/.test(cardNumber)) {
      validationErrors.cardNumber = 'Invalid card number';
    }
    
    // Expiry date validation
    if (!expiryDate) {
      validationErrors.expiryDate = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      validationErrors.expiryDate = 'Invalid expiry date (MM/YY format)';
    }
    
    // CVV validation
    if (!cvv) {
      validationErrors.cvv = 'CVV is required';
    } else if (!/^\d{3}$/.test(cvv)) {
      validationErrors.cvv = 'Invalid CVV';
    }
    
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      // Payment form is valid, proceed with submission or further processing
      console.log('Payment form is valid');
      // Place your logic for payment submission or further processing here
    }
  };

  return (
    <div className='payment-form'>
    <form onSubmit={handleSubmit} >
      <div className='input_field'>
        <label>Card Number</label>
        <input
          type="text"
          name="cardNumber"
          value={cardNumber}
          onChange={handleInputChange}
        />
        {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
      </div>
      <div className='input_field'>
        <label>Expiry Date</label>
        <input
          type="text"
          name="expiryDate"
          value={expiryDate}
          onChange={handleInputChange}
        />
        {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
      </div>
      <div className='input_field'>
        <label>CVV</label>
        <input
          type="text"
          name="cvv"
          value={cvv}
          onChange={handleInputChange}
        />
        {errors.cvv && <span className="error">{errors.cvv}</span>}
      </div>
      <button className='hero-btn red-btn mt-5' type="submit">Submit</button>
    </form>

    </div>
  );
};

export default PaymentForm;
