const express = require('express');
const mongoose = require('mongoose');
const meals = require ('./routes/Meals')
const orders = require ('./routes/Orders')
const app = express();


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true } );

app.use('/api/meals', meals);
app.use('/api/orders', orders)

module.exports = app;