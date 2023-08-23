import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login-user', {
        phoneNumber,
        password,
      });
      console.log(response)
      setToken(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        style={{ width: '300px', border: '1px solid #ccc', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
        onSubmit={handleSubmit}
      >
        <div className="form-group text-center p-3">
          <label htmlFor="exampleInputEmail1">Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Mobile Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-group text-center p-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Submit
        </button>
      </form>
      {token && <p className="text-center">Logged in successfully!</p>}
    </div>
  );
}

export default LoginForm;
