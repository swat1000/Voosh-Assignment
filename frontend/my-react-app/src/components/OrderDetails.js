import React, { useState } from 'react';
import axios from 'axios';

function OrderDetails() {
  const [user_id, setUser_id] = useState('');
  const [orders, setOrders] = useState([]);

  const handleGetOrder = async () => {
    try {
      const response = await axios.get(`/api/get-order?user_id=${user_id}`);
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
      <button onClick={handleGetOrder}>Get Order Details</button>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            User ID: {order.user_id}, Sub Total: {order.sub_total}, Phone Number:{' '}
            {order.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderDetails;
