const express = require('express');
const router = express.Router();

const User = require('../models/User.schema');

const {
    registerUser,
    loginUser
  } = require('../controllers/User.controller');
  
  router.post('/add-user', registerUser);
  router.post('/login-user', loginUser);
  
  
  module.exports = router;