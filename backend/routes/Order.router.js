const express = require('express');
const router = express.Router();

const Order = require('../models/Order.schema');

const {
    addOrder,
    getOrder
} = require('../controllers/Order.controller');

router.post('/add-order', addOrder);
router.get('/get-order', getOrder);

module.exports = router; 
