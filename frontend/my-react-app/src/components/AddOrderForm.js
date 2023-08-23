import React, { useState } from 'react';
import axios from 'axios';

function AddOrderForm() {
  const [user_id, setUser_id] = useState('');
  const [sub_total, setSubTotal] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/add-order', {
        user_id,
        sub_total,
        phoneNumber,
      });
      console.log('Order added successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
          value={user_id}
          onChange={(e) => setUser_id(e.target.value)}
        />
        <input
          type="number"
          placeholder="Sub Total"
          value={sub_total}
          onChange={(e) => setSubTotal(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit" className='btn btn-primary m-3'>Add Order</button>
      </form>
    </div>
  );
}

export default AddOrderForm;
