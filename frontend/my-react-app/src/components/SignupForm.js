import React, { useState } from 'react';
import axios from 'axios'


function SignupForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/add-user', {
        name,
        phoneNumber,
        password,
      });
      console.log('User registered successfully');
      setToken(response.data.token);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      
      

      <div className="d-flex justify-content-center align-items-center vh-100">
      
      <form
        style={{ width: '300px', border: '1px solid #ccc', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
        onSubmit={handleSubmit}
      >
        <h2 className='mx-6'>Signup</h2>
        <div className="form-group text-center p-3">
        <label>UserName</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              console.log('Name input changed:', e.target.value);
              setName(e.target.value);
            }}
          />
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Mobile Number"
            value={phoneNumber}
            onChange={(e) => {
              console.log('Phone number input changed:', e.target.value);
              setPhoneNumber(e.target.value);
            }}
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
            onChange={(e) => {
              console.log('Password input changed:', e.target.value);
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Submit
        </button>
      </form>
      {token && <p className="text-center">User Registered in successfully!</p>}
    </div>
    </div>
  );
}

export default SignupForm;