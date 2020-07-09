const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const meals = require ('./routes/Meals')
const orders = require ('./routes/Orders')
const app = express();


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true } );

app.use('/api/meals', meals);
app.use('/api/orders', orders)
app.use(bodyParser.json())
module.exports = app;