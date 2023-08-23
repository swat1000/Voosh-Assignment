import React, { useState } from 'react';
import axios from 'axios';

function OrderDetails() {
  const [user_id, setUser_id] = useState('');
  const [orders, setOrders] = useState([]);

  const handleGetOrder = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/get-order?user_id=${user_id}`);
      setOrders(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Order Details</h2>
      <input
        type="text"
        placeholder="User ID"
        value={user_id}
        onChange={(e) => setUser_id(e.target.value)}
      />
      <button onClick={handleGetOrder} className='btn btn-primary m-3'>Get Order Details</button>
      <ul>
        {orders.map((orders, index) => (
          <li key={index}>
            User ID: {orders.user_id}, Sub Total: {orders.sub_total}, Phone Number:{' '}
            {orders.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderDetails;
