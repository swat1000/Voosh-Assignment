const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const User_route = require('./routes/User.router')
const Order_route = require('./routes/Order.router')
require('dotenv').config();



const PORT = process.env.PORT;


app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/Voosh', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/api', User_route);
app.use('/api', Order_route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
