const { Order } = require('../models/Order.schema');

const SECRET_KEY = 'thisisassignmentbyvoosh'; 



const addOrder = async (req, res) => {
  const { username, sub_total, phoneNumber } = req.body;

  try {
    
    const newOrder = new Order({
      username,
      sub_total,
      phoneNumber,
    });
    await newOrder.save();

    res.status(201).json({ message: 'Order added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};


const getOrder = async (req, res) => {
  const username = req.query.username;

  try {
    
    const orders = await Order.find({ username });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
  addOrder,
  getOrder
};
