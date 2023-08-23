const { Order } = require('../models/Order.schema');

const SECRET_KEY = 'your-secret-key'; 



const addOrder = async (req, res) => {
  const { user_id, sub_total, phoneNumber } = req.body;

  try {
    
    const newOrder = new Order({
      user_id,
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
  const user_id = req.query.user_id;

  try {
    // Find orders for the given user_id
    const orders = await Order.find({ user_id });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
  addOrder,
  getOrder
};
