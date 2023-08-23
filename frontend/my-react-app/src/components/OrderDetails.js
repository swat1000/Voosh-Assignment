import React, { useState } from 'react';
import axios from 'axios';

function OrderDetails() {
  const [username, setUsername] = useState('');
  const [orders, setOrders] = useState([]);

  const handleGetOrder = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/get-order?user_id=${username}`);
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
        placeholder="UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleGetOrder} className='btn btn-primary m-3'>Get Order Details</button>
      <ul>
        {orders.map((orders, index) => (
          <li key={index}>
            Name: {orders.username}, Sub Total: {orders.sub_total}, Phone Number:{' '}
            {orders.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderDetails;
